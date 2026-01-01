/**
 * Rate Limiting and Quota Management Middleware
 * Implements IP-based and user-based rate limiting with subscription tier quotas
 */

import { Request, Response, NextFunction } from 'express';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const rateLimitStore: RateLimitStore = {};
const quotaStore: RateLimitStore = {};

/**
 * Clean up expired entries from store
 */
function cleanupStore(store: RateLimitStore) {
  const now = Date.now();
  for (const key in store) {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  }
}

// Cleanup every 5 minutes
setInterval(() => {
  cleanupStore(rateLimitStore);
  cleanupStore(quotaStore);
}, 5 * 60 * 1000);

/**
 * IP-based rate limiting
 * Prevents DDoS and brute force attacks
 */
export function rateLimitByIP(options: {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Max requests per window
}) {
  return (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    const key = `ip:${ip}`;
    const now = Date.now();

    if (!rateLimitStore[key] || rateLimitStore[key].resetTime < now) {
      rateLimitStore[key] = {
        count: 1,
        resetTime: now + options.windowMs,
      };
      return next();
    }

    rateLimitStore[key].count++;

    if (rateLimitStore[key].count > options.maxRequests) {
      const retryAfter = Math.ceil((rateLimitStore[key].resetTime - now) / 1000);
      res.setHeader('Retry-After', retryAfter.toString());
      res.setHeader('X-RateLimit-Limit', options.maxRequests.toString());
      res.setHeader('X-RateLimit-Remaining', '0');
      res.setHeader('X-RateLimit-Reset', rateLimitStore[key].resetTime.toString());
      
      return res.status(429).json({
        error: 'Too many requests',
        message: `Rate limit exceeded. Please try again in ${retryAfter} seconds.`,
        retryAfter,
      });
    }

    res.setHeader('X-RateLimit-Limit', options.maxRequests.toString());
    res.setHeader('X-RateLimit-Remaining', (options.maxRequests - rateLimitStore[key].count).toString());
    res.setHeader('X-RateLimit-Reset', rateLimitStore[key].resetTime.toString());

    next();
  };
}

/**
 * User-based rate limiting
 * Limits requests per authenticated user
 */
export function rateLimitByUser(options: {
  windowMs: number;
  maxRequests: number;
}) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(); // Skip if not authenticated
    }

    const key = `user:${req.user.userId}`;
    const now = Date.now();

    if (!rateLimitStore[key] || rateLimitStore[key].resetTime < now) {
      rateLimitStore[key] = {
        count: 1,
        resetTime: now + options.windowMs,
      };
      return next();
    }

    rateLimitStore[key].count++;

    if (rateLimitStore[key].count > options.maxRequests) {
      const retryAfter = Math.ceil((rateLimitStore[key].resetTime - now) / 1000);
      res.setHeader('Retry-After', retryAfter.toString());
      
      return res.status(429).json({
        error: 'Too many requests',
        message: `User rate limit exceeded. Please try again in ${retryAfter} seconds.`,
        retryAfter,
      });
    }

    next();
  };
}

/**
 * Subscription tier quotas
 */
export const subscriptionQuotas = {
  amateur: {
    queriesPerMonth: 500,
    maxUsers: 1,
  },
  pro: {
    queriesPerMonth: 3000,
    maxUsers: 5,
  },
  enterprise: {
    queriesPerMonth: Infinity,
    maxUsers: Infinity,
  },
};

/**
 * API quota management based on subscription tier
 */
export function apiQuota(options: {
  quotaType: 'queries';
}) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    // TODO: Fetch user's subscription tier from database
    // For now, assume 'amateur' tier
    const tier = 'amateur';
    const quota = subscriptionQuotas[tier as keyof typeof subscriptionQuotas];

    const key = `quota:${req.user.userId}:${options.quotaType}`;
    const now = Date.now();
    const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime();

    if (!quotaStore[key] || quotaStore[key].resetTime < monthStart) {
      quotaStore[key] = {
        count: 1,
        resetTime: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).getTime(),
      };
      return next();
    }

    quotaStore[key].count++;

    if (quotaStore[key].count > quota.queriesPerMonth) {
      const resetDate = new Date(quotaStore[key].resetTime);
      
      return res.status(403).json({
        error: 'Quota exceeded',
        message: `Monthly ${options.quotaType} quota exceeded for ${tier} tier.`,
        quota: quota.queriesPerMonth,
        used: quotaStore[key].count - 1,
        resetDate: resetDate.toISOString(),
      });
    }

    res.setHeader('X-Quota-Limit', quota.queriesPerMonth.toString());
    res.setHeader('X-Quota-Remaining', (quota.queriesPerMonth - quotaStore[key].count).toString());
    res.setHeader('X-Quota-Reset', quotaStore[key].resetTime.toString());

    next();
  };
}

/**
 * Predefined rate limit configurations
 */
export const rateLimits = {
  // Strict limit for authentication endpoints
  auth: rateLimitByIP({
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5, // 5 requests per 15 minutes
  }),

  // Standard API rate limit
  api: rateLimitByIP({
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 60, // 60 requests per minute
  }),

  // Generous limit for public endpoints
  public: rateLimitByIP({
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 100, // 100 requests per minute
  }),
};
