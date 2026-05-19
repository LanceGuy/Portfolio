import { NextRequest, NextResponse } from "next/server";
import { validateAdminPassword, generateToken, createAdminSession, hashPassword } from "@/lib/admin";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password || typeof password !== "string") {
      return NextResponse.json(
        { message: "Password is required" },
        { status: 400 }
      );
    }

    // Validate password
    if (!validateAdminPassword(password)) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate session token
    const token = generateToken();
    await createAdminSession(token);

    return NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
