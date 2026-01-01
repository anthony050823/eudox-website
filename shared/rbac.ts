/**
 * Role-Based Access Control (RBAC) System
 * Defines roles, permissions, and authorization logic
 */

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

export enum Permission {
  // User management
  READ_USERS = 'read:users',
  WRITE_USERS = 'write:users',
  DELETE_USERS = 'delete:users',
  
  // Early access management
  READ_EARLY_ACCESS = 'read:early_access',
  WRITE_EARLY_ACCESS = 'write:early_access',
  DELETE_EARLY_ACCESS = 'delete:early_access',
  
  // API usage
  USE_API = 'use:api',
  USE_API_PREMIUM = 'use:api_premium',
  
  // Admin operations
  MANAGE_SYSTEM = 'manage:system',
  VIEW_ANALYTICS = 'view:analytics',
}

// Role-Permission mapping
export const rolePermissions: Record<Role, Permission[]> = {
  [Role.ADMIN]: [
    Permission.READ_USERS,
    Permission.WRITE_USERS,
    Permission.DELETE_USERS,
    Permission.READ_EARLY_ACCESS,
    Permission.WRITE_EARLY_ACCESS,
    Permission.DELETE_EARLY_ACCESS,
    Permission.USE_API,
    Permission.USE_API_PREMIUM,
    Permission.MANAGE_SYSTEM,
    Permission.VIEW_ANALYTICS,
  ],
  [Role.USER]: [
    Permission.READ_EARLY_ACCESS,
    Permission.WRITE_EARLY_ACCESS,
    Permission.USE_API,
  ],
  [Role.GUEST]: [
    Permission.READ_EARLY_ACCESS,
  ],
};

/**
 * Check if a role has a specific permission
 */
export function hasPermission(role: Role, permission: Permission): boolean {
  return rolePermissions[role]?.includes(permission) ?? false;
}

/**
 * Check if a role has any of the specified permissions
 */
export function hasAnyPermission(role: Role, permissions: Permission[]): boolean {
  return permissions.some(permission => hasPermission(role, permission));
}

/**
 * Check if a role has all of the specified permissions
 */
export function hasAllPermissions(role: Role, permissions: Permission[]): boolean {
  return permissions.every(permission => hasPermission(role, permission));
}

/**
 * Get all permissions for a role
 */
export function getRolePermissions(role: Role): Permission[] {
  return rolePermissions[role] ?? [];
}
