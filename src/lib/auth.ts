/**
 * Authentication utilities for password validation
 * This file uses Node.js crypto module - only imported by API routes (not middleware)
 */

import crypto from "crypto";

/**
 * Hash password using SHA256
 */
export function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

/**
 * Generate a secure random token
 */
export function generateToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

/**
 * Validate password against environment variable
 */
export function validateAdminPassword(password: string): boolean {
  const expectedHash = process.env.ADMIN_PASSWORD_HASH;

  if (!expectedHash) {
    return false;
  }

  const providedHash = hashPassword(password);
  return providedHash === expectedHash;
}
