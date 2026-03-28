# AWS Deployment

## Maintenance

### Deploy a new version
```bash
# Build for linux/amd64 (required — App Runner runs on x86_64)
docker build --platform linux/amd64 -t eudox-website .

# Push to ECR
aws ecr get-login-password --region us-west-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-west-1.amazonaws.com
docker tag eudox-website:latest <account-id>.dkr.ecr.us-west-1.amazonaws.com/eudox-website:latest
docker push <account-id>.dkr.ecr.us-west-1.amazonaws.com/eudox-website:latest

# Then go to App Runner → your service → Rebuild

# After the docker push, invalidate CloudFront cache
aws cloudfront list-distributions --query "DistributionList.Items[*].{ID:Id,Domain:DomainName}" --output table

aws cloudfront create-invalidation --distribution-id <YOUR_DIST_ID> --paths "/*"

```

### Update environment variables
App Runner → your service → Configuration → Environment variables

### Push database schema changes
```bash
DATABASE_URL="your-supabase-url" pnpm db:push
```

### View application logs
App Runner → your service → Logs → Application logs

---

## Architecture

```
Browser
  │
  ├── eudox.ai / www.eudox.ai
  │       │
  │   CloudFront (us-east-1)
  │   - SSL cert covers eudox.ai + www.eudox.ai (ACM, us-east-1)
  │   - www.eudox.ai → 301 redirect → eudox.ai (CloudFront Function)
  │       │
  │   App Runner (us-west-2)
  │   - Runs Docker container from ECR
  │   - Express server: serves React frontend + tRPC API
  │   - Custom domain: eudox.ai (Active)
  │       │
  │   Supabase (PostgreSQL)
  │   - 4 tables: users, early_access_requests, feedback_submissions, video_analytics
```

---

## Services

| Service | Purpose | Region |
|---|---|---|
| AWS ECR | Docker image registry | us-west-2 |
| AWS App Runner | Runs the Express server | us-west-2 |
| AWS CloudFront | HTTPS + apex domain + www redirect | us-east-1 |
| AWS ACM | SSL certificate (eudox.ai + www.eudox.ai) | us-east-1 |
| AWS Route 53 | DNS for eudox.ai | global |
| Supabase | PostgreSQL database | — |

---

## DNS (Route 53 — eudox.ai hosted zone)

| Name | Type | Value |
|---|---|---|
| `eudox.ai` | A (Alias) | CloudFront distribution |
| `www.eudox.ai` | A (Alias) | CloudFront distribution |
| ACM validation CNAMEs | CNAME | acm-validations.aws |

---

## App Runner Environment Variables

| Key | Description |
|---|---|
| `NODE_ENV` | `production` |
| `DATABASE_URL` | Supabase transaction pooler connection string |
| `JWT_SECRET` | Signs session cookies — keep secret, changing it invalidates all sessions |

---

## Database (Supabase)

- Driver: `postgres` (postgres-js) via Drizzle ORM
- Use the **transaction pooler** connection string (port `6543`), not the direct connection
- Schema is managed by Drizzle — run `pnpm db:push` after any schema changes in `drizzle/schema.ts`

---

## Build System Notes

- Vite builds the React frontend → `dist/public/`
- esbuild bundles the Express server → `dist/index.js`
- esbuild uses `--splitting` so that dev-only Vite imports are code-split into a separate chunk and never loaded in production
- Docker image must be built with `--platform linux/amd64` on Apple Silicon machines
