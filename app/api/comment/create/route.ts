import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/comment/create`;

  const formData = await request.formData();

  const dto = await axios.post(url, formData);

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
