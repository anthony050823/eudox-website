/**
 * Input Validation Middleware
 * Implements strict schema validation using Zod to prevent injection attacks
 */

import { Request, Response, NextFunction } from 'express';
import { z, ZodSchema } from 'zod';

/**
 * Validate request body against Zod schema
 */
export function validateBody(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Validation failed',
          details: (error as any).errors.map((err: any) => ({
            path: err.path.join('.'),
            message: err.message,
          })),
        });
      }
      return res.status(400).json({ error: 'Invalid request body' });
    }
  };
}

/**
 * Validate request query parameters against Zod schema
 */
export function validateQuery(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.query = schema.parse(req.query) as any;
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Validation failed',
          details: (error as any).errors.map((err: any) => ({
            path: err.path.join('.'),
            message: err.message,
          })),
        });
      }
      return res.status(400).json({ error: 'Invalid query parameters' });
    }
  };
}

/**
 * Validate request params against Zod schema
 */
export function validateParams(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.params = schema.parse(req.params) as any;
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Validation failed',
          details: (error as any).errors.map((err: any) => ({
            path: err.path.join('.'),
            message: err.message,
          })),
        });
      }
      return res.status(400).json({ error: 'Invalid URL parameters' });
    }
  };
}

/**
 * Sanitize string input to prevent injection attacks
 */
export function sanitizeString(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove HTML tags
    .replace(/['";]/g, '') // Remove SQL injection characters
    .replace(/\\/g, '') // Remove backslashes
    .trim();
}

/**
 * Sanitize email input
 */
export function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Common validation schemas
 */
export const commonSchemas = {
  email: z.string().email().max(255).transform(sanitizeEmail),
  
  name: z.string().min(1).max(255).transform(sanitizeString),
  
  companyName: z.string().min(1).max(255).transform(sanitizeString),
  
  id: z.string().uuid(),
  
  pagination: z.object({
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().max(100).default(20),
  }),
  
  search: z.object({
    q: z.string().min(1).max(255).transform(sanitizeString),
  }),
};

/**
 * Early Access form validation schema
 */
export const earlyAccessSchema = z.object({
  name: commonSchemas.name,
  email: commonSchemas.email,
  company: commonSchemas.companyName,
  subscriptionTier: z.enum(['amateur', 'pro', 'enterprise']),
});

/**
 * Prevent NoSQL injection by validating MongoDB queries
 */
export function sanitizeMongoQuery(query: any): any {
  if (typeof query !== 'object' || query === null) {
    return query;
  }

  const sanitized: any = {};
  
  for (const key in query) {
    // Remove MongoDB operators that could be used for injection
    if (key.startsWith('$')) {
      continue;
    }
    
    const value = query[key];
    
    if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeMongoQuery(value);
    } else if (typeof value === 'string') {
      sanitized[key] = sanitizeString(value);
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
}
