/**
 * JWT Token Management with Refresh Token Support
 * Implements short-lived access tokens (15 min) and long-lived refresh tokens (7 days)
 */

import jwt from 'jsonwebtoken';
import { Role } from '../../shared/rbac';

const JWT_SECRET = process.env.JWT_SECRET!;
const ACCESS_TOKEN_EXPIRY = '15m'; // 15 minutes
const REFRESH_TOKEN_EXPIRY = '7d'; // 7 days

export interface TokenPayload {
  userId: string;
  email: string;
  role: Role;
  type: 'access' | 'refresh';
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
  expiresIn: number; // seconds
}

/**
 * Generate access and refresh token pair
 */
export function generateTokenPair(userId: string, email: string, role: Role = Role.USER): TokenPair {
  const accessToken = jwt.sign(
    {
      userId,
      email,
      role,
      type: 'access',
    } as TokenPayload,
    JWT_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );

  const refreshToken = jwt.sign(
    {
      userId,
      email,
      role,
      type: 'refresh',
    } as TokenPayload,
    JWT_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );

  return {
    accessToken,
    refreshToken,
    expiresIn: 15 * 60, // 15 minutes in seconds
  };
}

/**
 * Verify and decode JWT token
 */
export function verifyToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
    return decoded;
  } catch (error) {
    return null;
  }
}

/**
 * Verify access token specifically
 */
export function verifyAccessToken(token: string): TokenPayload | null {
  const payload = verifyToken(token);
  if (payload && payload.type === 'access') {
    return payload;
  }
  return null;
}

/**
 * Verify refresh token specifically
 */
export function verifyRefreshToken(token: string): TokenPayload | null {
  const payload = verifyToken(token);
  if (payload && payload.type === 'refresh') {
    return payload;
  }
  return null;
}

/**
 * Refresh access token using refresh token
 */
export function refreshAccessToken(refreshToken: string): { accessToken: string; expiresIn: number } | null {
  const payload = verifyRefreshToken(refreshToken);
  
  if (!payload) {
    return null;
  }

  const accessToken = jwt.sign(
    {
      userId: payload.userId,
      email: payload.email,
      role: payload.role,
      type: 'access',
    } as TokenPayload,
    JWT_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );

  return {
    accessToken,
    expiresIn: 15 * 60,
  };
}
