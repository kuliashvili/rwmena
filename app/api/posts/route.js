import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await fetch("https://dummyjson.com/posts");
  const posts = await res.json();

  return NextResponse.json(posts);
}
