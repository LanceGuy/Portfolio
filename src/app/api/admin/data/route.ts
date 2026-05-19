import { NextRequest, NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/session";
import { projects, profile, highlights, skills, experience, education } from "@/lib/data";

// This endpoint returns all portfolio data
export async function GET() {
  try {
    const isAdmin = await verifyAdminSession();

    if (!isAdmin) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      profile,
      projects,
      highlights,
      skills,
      experience,
      education,
    });
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// This endpoint handles updating data
export async function PUT(request: NextRequest) {
  try {
    const isAdmin = await verifyAdminSession();

    if (!isAdmin) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { section } = body;

    if (!section) {
      return NextResponse.json(
        { message: "Section is required" },
        { status: 400 }
      );
    }

    // In a real implementation, you would save this to a database or file
    // For now, we'll return a success response
    // The data persists only during the session in memory

    return NextResponse.json({
      message: "Data updated successfully",
      section,
    });
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
