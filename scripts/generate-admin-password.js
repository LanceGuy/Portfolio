#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

/**
 * Password hash generator for the admin panel.
 *
 * Usage:
 *   node scripts/generate-admin-password.js "your-password-here"
 *
 * Or run interactively:
 *   node scripts/generate-admin-password.js
 */

const crypto = require("crypto");
const readline = require("readline");

function generateHash(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function printHash(hash) {
  console.log("\nPassword hash generated:\n");
  console.log(hash);
  console.log("\nAdd this to your .env.local file:\n");
  console.log(`ADMIN_PASSWORD_HASH=${hash}\n`);
}

const args = process.argv.slice(2);

if (args.length > 0) {
  printHash(generateHash(args.join(" ")));
  process.exit(0);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\nAdmin Password Hash Generator\n");

rl.question("Enter your admin password: ", (password) => {
  if (!password) {
    console.log("\nPassword cannot be empty\n");
    rl.close();
    process.exit(1);
  }

  rl.question("Confirm password: ", (passwordConfirm) => {
    if (password !== passwordConfirm) {
      console.log("\nPasswords do not match\n");
      rl.close();
      process.exit(1);
    }

    printHash(generateHash(password));
    console.log("Keep this hash safe and do not share it.\n");

    rl.close();
    process.exit(0);
  });
});
