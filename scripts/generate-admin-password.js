#!/usr/bin/env node

/**
 * Password Hash Generator for Admin Panel
 * 
 * This script helps you generate a SHA256 hash for your admin password.
 * 
 * Usage:
 *   node scripts/generate-admin-password.js "your-password-here"
 * 
 * Or run interactively:
 *   node scripts/generate-admin-password.js
 */

const crypto = require('crypto');
const readline = require('readline');

function generateHash(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

const args = process.argv.slice(2);

if (args.length > 0) {
  // Use password from command line argument
  const password = args.join(' ');
  const hash = generateHash(password);
  
  console.log('\n✓ Password Hash Generated:\n');
  console.log(hash);
  console.log('\n📝 Add this to your .env.local file:\n');
  console.log(`ADMIN_PASSWORD_HASH=${hash}\n`);
  
  process.exit(0);
} else {
  // Interactive mode
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('\n🔐 Admin Password Hash Generator\n');

  rl.question('Enter your admin password: ', (password) => {
    if (!password) {
      console.log('\n❌ Password cannot be empty\n');
      rl.close();
      process.exit(1);
    }

    rl.question('Confirm password: ', (passwordConfirm) => {
      if (password !== passwordConfirm) {
        console.log('\n❌ Passwords do not match\n');
        rl.close();
        process.exit(1);
      }

      const hash = generateHash(password);

      console.log('\n✓ Password Hash Generated:\n');
      console.log(hash);
      console.log('\n📝 Add this to your .env.local file:\n');
      console.log(`ADMIN_PASSWORD_HASH=${hash}\n`);
      console.log('⚠️  Keep this hash safe and do not share it.\n');

      rl.close();
      process.exit(0);
    });
  });
}
