import { NextResponse } from "next/server";
import { posts } from "./posts";

export async function GET(req: Request) {
  let { searchParams } = new URL(req.url);
  let query = searchParams.get('q');

  let currentPosts = posts;

  if (query) {
    currentPosts = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
  }
 
  return NextResponse.json(currentPosts)
}

export async function POST(req: Request) {
 
  let body = await req.json();

  return NextResponse.json(body)
}

