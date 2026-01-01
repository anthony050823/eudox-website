/**
 * Authorization Middleware
 * Implements Role-Based Access Control (RBAC) for API endpoints
 */

import { Request, Response, NextFunction } from 'express';
import { Permission, hasPermission, hasAnyPermission, hasAllPermissions } from '../../shared/rbac';
import { verifyAccessToken } from '../lib/jwt';

/**
 * Extend Express Request to include user info
 */
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        email: string;
        role: string;
      };
    }
  }
}

/**
 * Middleware to verify JWT and attach user to request
 */
export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid authorization header' });
  }

  const token = authHeader.substring(7);
  const payload = verifyAccessToken(token);

  if (!payload) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  req.user = {
    userId: payload.userId,
    email: payload.email,
    role: payload.role,
  };

  next();
}

/**
 * Middleware to check if user has required permission
 */
export function requirePermission(permission: Permission) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    if (!hasPermission(req.user.role as any, permission)) {
      return res.status(403).json({ 
        error: 'Insufficient permissions',
        required: permission,
      });
    }

    next();
  };
}

/**
 * Middleware to check if user has any of the required permissions
 */
export function requireAnyPermission(permissions: Permission[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    if (!hasAnyPermission(req.user.role as any, permissions)) {
      return res.status(403).json({ 
        error: 'Insufficient permissions',
        required: permissions,
      });
    }

    next();
  };
}

/**
 * Middleware to check if user has all of the required permissions
 */
export function requireAllPermissions(permissions: Permission[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    if (!hasAllPermissions(req.user.role as any, permissions)) {
      return res.status(403).json({ 
        error: 'Insufficient permissions',
        required: permissions,
      });
    }

    next();
  };
}
