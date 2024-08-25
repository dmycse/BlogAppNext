'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const JSONSERVER_URL = 'http://localhost:8000/posts';


export async function createPost(data: FormData) {

  let {title, body} = Object.fromEntries(data);

  let response = await fetch(JSONSERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({title, body})
    }
  );

  if (!response.ok) {
    throw new Error('Unable to fetch post');
  }
  
  return await response.json();
}


export async function updatePost(data: FormData) {

  let {title, body, id} = Object.fromEntries(data);

  let response = await fetch(`${JSONSERVER_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({title, body})
  });

  let post = await response.json();

  revalidatePath(`/blog/${post.id}`);
  redirect(`/blog/${post.id}`);
}



export async function deletePost(id: string) {
  await fetch(`${JSONSERVER_URL}/${id}`, {
    method: "DELETE"
  });
  revalidatePath('/blog');
  redirect('/blog');
}