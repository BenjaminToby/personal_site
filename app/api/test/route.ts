import { NextResponse } from "next/server";

export async function GET(request: Request, context?: {}) {
    console.log(request.headers);

    return NextResponse.json({ name: "Benjamin Toby" });
}
