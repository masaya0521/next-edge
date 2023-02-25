import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("middleware from edge runtime");
  document.cookie = "runtime=edge";
}
