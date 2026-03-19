FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

# Build stage
FROM base AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml .npmrc ./
COPY patches/ ./patches/
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# Production stage — lean image with only runtime deps
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/.npmrc ./
COPY --from=builder /app/patches/ ./patches/

RUN corepack enable && corepack prepare pnpm@10.4.1 --activate \
  && pnpm install --frozen-lockfile --prod

EXPOSE 3000
CMD ["node", "dist/index.js"]
