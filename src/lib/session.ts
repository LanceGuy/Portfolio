/**
 * Session management utilities
 * Edge Runtime compatible - no Node.js specific modules
 */

import { cookies } from "next/headers";

const ADMIN_TOKEN_NAME = "admin_session";
const TOKEN_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Create admin session cookie
 */
export async function createAdminSession(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: TOKEN_EXPIRY / 1000, // Convert to seconds
  });
}

/**
 * Get admin session token
 */
export async function getAdminSession(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_TOKEN_NAME)?.value || null;
}

/**
 * Verify admin session
 */
export async function verifyAdminSession(): Promise<boolean> {
  const token = await getAdminSession();
  return token !== null;
}

/**
 * Clear admin session
 */
export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_TOKEN_NAME);
}
