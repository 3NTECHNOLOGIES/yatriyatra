import { NextResponse } from "next/server";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.yatriyatra.com/api/v1";

export async function GET(request: Request) {
  try {
    // Get the search params from the request URL
    const { searchParams } = new URL(request.url);

    // Forward the request to the actual API
    const response = await fetch(
      `${API_URL}/blogs?${searchParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    // Just pass through the API response as is
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in blogs API route:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to fetch blogs",
        data: {
          blogs: [],
          page: 1,
          limit: 10,
          totalPages: 0,
          totalResults: 0,
        },
      },
      { status: 500 }
    );
  }
}
