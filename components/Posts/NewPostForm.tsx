import { createPost } from "@/actions/posts";


export default function NewPostForm({onSuccess}:{onSuccess: (id?: string) => Promise<void>}) {

  async function createNewPost(data: FormData) {
    'use server';
    let post = await createPost(data);
    
    await onSuccess(post.id);
  }

  return (
    <form action={createNewPost} className="mt-8 flex flex-col justify-center gap-4">
      <input type="text" name="title" placeholder="title"  className="p-2" required/>
      <textarea name="body" placeholder="content" className="p-2" required />
      <button type="submit" className="btn">Create</button>
    </form>
  )
}
