import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: any) {
  const body = await request.json();

  const url = `${process.env.NEXT_PUBLIC_API_URL}/authenticate`;

  var bodyFormData = new FormData();
  bodyFormData.append("username", body.username);
  bodyFormData.append("password", body.password);

  const dto = await axios.post(url, bodyFormData);

  const resData = dto.data;

  if (resData.success) {
    const token = resData?.token?.acsess;

    if (!token) {
      return NextResponse.json({ success: false });
    }

    const response = NextResponse.json(
      { success: true },
      { status: 200, headers: { "content-type": "application/json" } }
    );

    response.cookies.set({
      name: "token",
      value: token,
      path: "/",
    });

    return response;
  }
  return NextResponse.json({ success: false });
}
