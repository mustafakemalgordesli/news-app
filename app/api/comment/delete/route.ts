import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: any) {
  const token = request.headers.get("authorization");

  const body = await request.json();

  const url = `${process.env.NEXT_PUBLIC_API_URL}/comment/delete?comment_id=${body.comment_id}`;

  const dto = await axios.delete(url, {
    headers: {
      Authorization: token,
    },
  });

  const resData = dto.data;

  if (resData.success) {
    const response = NextResponse.json(
      { success: true },
      { status: 200, headers: { "content-type": "application/json" } }
    );

    return response;
  }

  return NextResponse.json({ success: false });
}
