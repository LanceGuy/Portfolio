/**
 * DEPRECATED: This file has been split into two modules for Edge Runtime compatibility
 * 
 * Import from these modules instead:
 * - @/lib/auth.ts - For password hashing and validation (Node.js only - API routes)
 * - @/lib/session.ts - For session management (Edge Runtime compatible - middleware)
 * 
 * This file is kept for reference only and can be safely deleted.
 */

// Re-export for backwards compatibility (if needed)
export { hashPassword, generateToken, validateAdminPassword } from "@/lib/auth";
export {
  createAdminSession,
  getAdminSession,
  verifyAdminSession,
  clearAdminSession,
} from "@/lib/session";

