/**
 * Security Middleware
 * Implements HTTPS enforcement, HSTS, and security headers
 */

import { Request, Response, NextFunction } from 'express';

/**
 * Enforce HTTPS in production
 */
export function enforceHTTPS(req: Request, res: Response, next: NextFunction) {
  // Skip in development
  if (process.env.NODE_ENV !== 'production') {
    return next();
  }

  // Check if request is secure
  const isSecure = req.secure || req.headers['x-forwarded-proto'] === 'https';

  if (!isSecure) {
    return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }

  next();
}

/**
 * Add security headers including HSTS
 */
export function securityHeaders(req: Request, res: Response, next: NextFunction) {
  // HTTP Strict Transport Security (HSTS)
  // Tells browsers to only use HTTPS for 1 year
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  // Prevent clickjacking attacks
  res.setHeader('X-Frame-Options', 'DENY');

  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Enable XSS protection
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // Control referrer information
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Content Security Policy
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https:; " +
    "connect-src 'self' https://api.eudox.ai;"
  );

  // Permissions Policy (formerly Feature Policy)
  res.setHeader(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=(), payment=()'
  );

  next();
}

/**
 * CORS configuration for API
 */
export function corsConfig(req: Request, res: Response, next: NextFunction) {
  const allowedOrigins = [
    'https://eudox.ai',
    'https://www.eudox.ai',
    'https://app.eudox.ai',
  ];

  // Allow localhost in development
  if (process.env.NODE_ENV !== 'production') {
    allowedOrigins.push('http://localhost:3000', 'http://localhost:5173');
  }

  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  next();
}

/**
 * Sanitize output to prevent XSS
 */
export function sanitizeOutput(data: any): any {
  if (typeof data === 'string') {
    return data
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }

  if (Array.isArray(data)) {
    return data.map(sanitizeOutput);
  }

  if (typeof data === 'object' && data !== null) {
    const sanitized: any = {};
    for (const key in data) {
      sanitized[key] = sanitizeOutput(data[key]);
    }
    return sanitized;
  }

  return data;
}
