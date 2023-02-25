// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextApiRequest) {
  return NextResponse.json({
    name: `Hello, from ${req.url}`,
  });
}
