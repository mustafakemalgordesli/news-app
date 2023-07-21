import { NextResponse } from "next/server";
import axios from "axios";

// import formidable from "formidable";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(request: any) {
  // const url = `${process.env.NEXT_PUBLIC_API_URL}/post/create`;
  const url = "http://192.168.10.35:8000/api/post/create";
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
