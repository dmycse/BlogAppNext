import { deletePost } from "@/actions/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function removePost (id: string) {
  'use server';
  await deletePost(id);
  revalidatePath('/blog');
  redirect('/blog');
}

export default function DeletePost({postId}: {postId: string}) {
  return (
    <form action={removePost.bind(null, postId)}>
      <button type="submit" className="btn">Remove</button>
    </form>
  )
}
