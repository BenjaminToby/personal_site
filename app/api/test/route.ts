import { NextResponse } from "next/server";

// export async function GET(request: Request, context?: {}) {
//     console.log(request.headers);

//     return NextResponse.json({ name: "Benjamin Toby" });
// }
export async function GET(request: Request) {
    return new Response(JSON.stringify({ name: "Benjamin Toby" }), {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    });
}
