import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: any) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/post/create`;

  const token = request.headers.get("authorization");

  const formData = await request.formData();

  const dto = await axios.post(url, formData, {
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
