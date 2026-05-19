# Admin Panel Setup Guide

## Overview

This portfolio includes a hidden admin panel accessible only through a secret login. The admin can manage:
- Projects (add, edit, delete)
- Profile information (bio, intro, role, location, email, phone)
- Portfolio content

## Setup Instructions

### 1. Generate Admin Password Hash

The admin password is stored securely using SHA256 hashing. To set up your password:

#### Option A: Using the provided script (Recommended)

```bash
# Interactive mode (prompts for password confirmation)
node scripts/generate-admin-password.js

# Or pass password as argument
node scripts/generate-admin-password.js "your-password-here"
```

#### Option B: Manual generation

```bash
node -e "console.log(require('crypto').createHash('sha256').update('YOUR_PASSWORD_HERE').digest('hex'))"
```

### 2. Configure Environment Variable

1. Create a `.env.local` file in the project root (if it doesn't exist)
2. Add the generated hash:

```env
ADMIN_PASSWORD_HASH=your_generated_hash_here
```

**Example:**
```env
ADMIN_PASSWORD_HASH=5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8
```

### 3. Start the Development Server

```bash
npm run dev
# or
pnpm dev
```

## Accessing the Admin Panel

### From the Frontend (Recommended - Hidden Access)

1. Go to your portfolio homepage
2. Scroll to the footer
3. Click on the word **"Guy"** in your name (it's clickable but subtle)
4. A login modal will appear
5. Enter your admin password
6. After successful login, you'll be redirected to the admin dashboard

### Direct Access

You can also navigate directly to:
- **Login page**: `/admin/login`
- **Dashboard**: `/admin` (requires login)

## Admin Dashboard Features

### Profile Editor
- Update bio, professional role, and intro text
- Modify contact information (email, phone)
- Change location

### Project Manager
- **Add New Projects**: Create new portfolio projects with:
  - Title and description
  - Technology stack
  - Image labels
  - Project links (optional)
- **Edit Projects**: Modify any existing project
- **Delete Projects**: Remove projects from your portfolio

### Additional Features (Coming Soon)
- Skills management
- Highlights management
- Image upload and management

## Security Notes

⚠️ **Important Security Practices:**

1. **Never commit `.env.local` to version control**
   - `.env.local` is git-ignored by default
   - Keep your password hash private

2. **Password Validation**
   - Passwords are validated server-side only
   - Password hashes are never sent to the client
   - Sessions use secure httpOnly cookies

3. **Session Management**
   - Admin sessions expire after 24 hours
   - Logging out clears the session cookie
   - Session validation on each admin request

4. **Production Deployment**
   - Ensure `NODE_ENV=production` for secure cookies
   - Use environment variables for password hashes (not hardcoded)
   - Verify HTTPS is enabled in production

## How the Admin Entry Point Works

The admin access point is intentionally subtle and hidden:

- Only the word **"Guy"** in the footer name is clickable
- Hover effect is minimal (slight color change)
- No obvious "Admin" button or link
- Makes it invisible to casual visitors

## Technical Details

### Files Modified/Created

#### New Files:
- `src/lib/admin.ts` - Admin utilities (auth, session, password validation)
- `src/components/AdminLoginModal.tsx` - Login modal component
- `src/components/AdminProfileEditor.tsx` - Profile editor component
- `src/components/AdminProjectManager.tsx` - Project manager component
- `src/app/admin/page.tsx` - Admin dashboard
- `src/app/admin/login/page.tsx` - Login page
- `src/app/api/auth/login.ts` - Login API endpoint
- `src/app/api/auth/logout.ts` - Logout API endpoint
- `src/app/api/admin/data.ts` - Admin data API
- `src/middleware.ts` - Protected routes middleware
- `scripts/generate-admin-password.js` - Password hash generator

#### Modified Files:
- `src/components/Footer.tsx` - Added clickable "Guy" text
- `.env.example` - Added admin password configuration

### Architecture

```
User clicks "Guy" in footer
         ↓
AdminLoginModal opens
         ↓
Password submitted to /api/auth/login
         ↓
Server validates using ADMIN_PASSWORD_HASH
         ↓
If valid: Generate token, set httpOnly cookie, redirect to /admin
         ↓
Admin dashboard loads (protected by middleware)
         ↓
User can manage portfolio content
```

## Troubleshooting

### "Invalid credentials" error
- Double-check that `ADMIN_PASSWORD_HASH` is correctly set in `.env.local`
- Verify you're using the hash from the password generator, not the plain password
- Ensure `.env.local` is in the project root directory

### Can't find the login modal
- Make sure you clicked on the word "Guy" (last name) in the footer
- Not the entire name - only "Guy" is clickable

### Changes not persisting
- Note: Currently, changes are validated on the backend but stored in memory only
- To persist changes permanently, connect to a database or file storage system
- See the API endpoints in `src/app/api/admin/data.ts` for where to add persistence

### Session expired after 24 hours
- This is intentional for security
- Log in again using the admin password

## Future Enhancements

Consider adding:
1. Database persistence (MongoDB, PostgreSQL, etc.)
2. Image upload and management
3. Multi-user admin support
4. Audit logs of changes
5. Content versioning/rollback
6. Skills and highlights editors
7. Experience and education management
8. Rate limiting on login attempts
9. Password reset functionality
10. Two-factor authentication

## Support

For issues or questions about the admin panel setup, refer to the inline comments in the generated files or check Next.js and React documentation.
