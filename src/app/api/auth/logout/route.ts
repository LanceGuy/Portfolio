import { NextResponse } from "next/server";
import { clearAdminSession } from "@/lib/session";

export async function POST() {
  try {
    await clearAdminSession();
    return NextResponse.json(
      { message: "Logout successful" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
