import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: any) {
  const token = request.headers.get("authorization");

  const body = await request.json();

  const url = `${process.env.NEXT_PUBLIC_API_URL}/comment/status/update?id=${body.id}`;

  const formData = new FormData();

  console.log(body);

  formData.append("show_status", body.show_status);

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
