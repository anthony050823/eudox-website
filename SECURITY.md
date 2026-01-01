# Backend Security Implementation

This document outlines the comprehensive security measures implemented in the Eudox backend API following industry best practices.

## 🔐 Pillar 1: Strong Authentication & Authorization

### Authentication
- **JWT with Refresh Tokens**: Short-lived access tokens (15 minutes) with long-lived refresh tokens (7 days)
- **Token Management**: Located in `server/lib/jwt.ts`
  - `generateTokenPair()`: Creates access and refresh token pair
  - `verifyAccessToken()`: Validates access tokens
  - `refreshAccessToken()`: Refreshes expired access tokens

### Authorization (RBAC)
- **Role-Based Access Control**: Defined in `shared/rbac.ts`
- **Roles**: Admin, User, Guest
- **Permissions**: Granular permissions for different operations
- **Middleware**: `server/middleware/authorization.ts`
  - `authenticate()`: Verifies JWT and attaches user to request
  - `requirePermission()`: Checks single permission
  - `requireAnyPermission()`: Checks if user has any of the required permissions
  - `requireAllPermissions()`: Checks if user has all required permissions

### Usage Example
```typescript
import { authenticate, requirePermission } from './middleware/authorization';
import { Permission } from '../shared/rbac';

// Protect endpoint with authentication and permission check
app.get('/api/admin/users',
  authenticate,
  requirePermission(Permission.READ_USERS),
  (req, res) => {
    // Only authenticated users with READ_USERS permission can access
  }
);
```

## 🔒 Pillar 2: Transport & Data Security

### HTTPS Enforcement
- **Middleware**: `server/middleware/security.ts`
- `enforceHTTPS()`: Redirects HTTP to HTTPS in production
- `securityHeaders()`: Adds comprehensive security headers
  - HSTS (HTTP Strict Transport Security)
  - X-Frame-Options (clickjacking protection)
  - X-Content-Type-Options (MIME sniffing protection)
  - X-XSS-Protection
  - Content Security Policy
  - Permissions Policy

### Data Encryption
- **Encryption Utilities**: `server/lib/encryption.ts`
- **Algorithm**: AES-256-GCM
- **Functions**:
  - `encrypt(text)`: Encrypts sensitive data
  - `decrypt(encryptedText)`: Decrypts data
  - `hash(text)`: One-way hashing for passwords
  - `generateSecureToken()`: Creates secure random tokens

### Usage Example
```typescript
import { encrypt, decrypt } from './lib/encryption';

// Encrypt sensitive data before storing
const encryptedEmail = encrypt(user.email);

// Decrypt when needed
const email = decrypt(encryptedEmail);
```

## ✅ Pillar 3: Input Validation & Output Sanitization

### Input Validation
- **Framework**: Zod schemas
- **Middleware**: `server/middleware/validation.ts`
- **Functions**:
  - `validateBody(schema)`: Validates request body
  - `validateQuery(schema)`: Validates query parameters
  - `validateParams(schema)`: Validates URL parameters

### Injection Prevention
- `sanitizeString()`: Removes SQL injection characters
- `sanitizeEmail()`: Normalizes email addresses
- `sanitizeMongoQuery()`: Prevents NoSQL injection

### Common Schemas
```typescript
import { commonSchemas, earlyAccessSchema, validateBody } from './middleware/validation';

// Use predefined schemas
app.post('/api/early-access',
  validateBody(earlyAccessSchema),
  (req, res) => {
    // req.body is validated and sanitized
  }
);
```

### Output Sanitization
- `sanitizeOutput()`: Prevents XSS attacks by encoding output

## 🚦 Pillar 4: Rate Limiting & Quota Management

### Rate Limiting
- **Middleware**: `server/middleware/rateLimit.ts`
- **IP-Based Limiting**: Prevents DDoS attacks
- **User-Based Limiting**: Per-user request limits

### Predefined Rate Limits
```typescript
import { rateLimits } from './middleware/rateLimit';

// Strict limit for auth endpoints (5 requests per 15 minutes)
app.post('/api/auth/login', rateLimits.auth, ...);

// Standard API limit (60 requests per minute)
app.use('/api', rateLimits.api);

// Generous limit for public endpoints (100 requests per minute)
app.use('/public', rateLimits.public);
```

### Subscription Quotas
```typescript
import { apiQuota } from './middleware/rateLimit';

// Enforce monthly query quota based on subscription tier
app.post('/api/query',
  authenticate,
  apiQuota({ quotaType: 'queries' }),
  (req, res) => {
    // Request counted against user's monthly quota
  }
);
```

### Quota Tiers
- **Amateur**: 500 queries/month, 1 user
- **Pro**: 3,000 queries/month, 5 users
- **Enterprise**: Unlimited queries, unlimited users

## 🛡️ Complete Security Stack Example

```typescript
import express from 'express';
import { enforceHTTPS, securityHeaders, corsConfig } from './middleware/security';
import { authenticate, requirePermission } from './middleware/authorization';
import { validateBody, earlyAccessSchema } from './middleware/validation';
import { rateLimits, apiQuota } from './middleware/rateLimit';
import { Permission } from '../shared/rbac';

const app = express();

// Apply global security middleware
app.use(enforceHTTPS);
app.use(securityHeaders);
app.use(corsConfig);

// Public endpoint with rate limiting
app.post('/api/early-access',
  rateLimits.public,
  validateBody(earlyAccessSchema),
  (req, res) => {
    // Handle early access signup
  }
);

// Protected API endpoint with full security stack
app.post('/api/query',
  rateLimits.api,
  authenticate,
  requirePermission(Permission.USE_API),
  apiQuota({ quotaType: 'queries' }),
  (req, res) => {
    // Handle AI query
  }
);

// Admin endpoint with strict access control
app.get('/api/admin/analytics',
  rateLimits.api,
  authenticate,
  requirePermission(Permission.VIEW_ANALYTICS),
  (req, res) => {
    // Return analytics data
  }
);
```

## 🔑 Environment Variables

Required environment variables for security features:

```bash
# JWT Authentication
JWT_SECRET=your-jwt-secret-key

# Data Encryption (32-byte hex string)
ENCRYPTION_KEY=your-encryption-key-hex

# OAuth (if using external OAuth provider)
OAUTH_SERVER_URL=https://oauth.provider.com
```

## 📋 Security Checklist

- [x] JWT with short-lived access tokens (15 min)
- [x] Refresh token mechanism
- [x] Role-Based Access Control (RBAC)
- [x] HTTPS enforcement with HSTS
- [x] Comprehensive security headers
- [x] Data encryption utilities (AES-256-GCM)
- [x] Input validation with Zod schemas
- [x] SQL/NoSQL injection prevention
- [x] XSS protection and output sanitization
- [x] IP-based rate limiting
- [x] User-based rate limiting
- [x] Subscription tier quotas
- [x] CORS configuration
- [ ] API key management (TODO)
- [ ] Service-to-service mTLS (TODO)

## 🚀 Next Steps

1. **Implement API Key Management**: For service-to-service communication
2. **Add Audit Logging**: Track all security-related events
3. **Set up Monitoring**: Alert on suspicious activity
4. **Regular Security Audits**: Penetration testing and vulnerability scanning
5. **Rate Limit Persistence**: Move to Redis for distributed rate limiting
6. **Database Integration**: Connect RBAC roles to user database

## 📚 References

- [OWASP API Security Top 10](https://owasp.org/www-project-api-security/)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
- [NIST Cryptographic Standards](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines)
