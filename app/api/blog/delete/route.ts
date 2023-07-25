import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: any) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/post/delete`;

  const token = request.headers.get("authorization");

  const body = await request.json();

  var bodyFormData = new FormData();
  bodyFormData.append("slug", body.slug);

  const dto = await axios.post(url, bodyFormData, {
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
