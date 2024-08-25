import { getPostById } from "@/utils/getPosts";
import { updatePost } from "@/actions/posts";

export default async function EditPost( {params: {id}}: {params: {id: string}} ) {

  let post = await getPostById(id);

  return (
    <div>
      <h1 className=" text-orange-500 font-bold">Profile of post#{post.id}</h1>

      <form action={updatePost} className="mt-8 flex flex-col justify-center gap-4">
        <input 
          type="text" 
          name="title" 
          placeholder="title"  
          className="p-2" 
          required
          defaultValue={post.title}
        />
        <textarea 
          name="body" 
          placeholder="content" 
          className="p-2"
          rows={5} 
          required
          defaultValue={post.body} 
        />
        <input type="hidden" name="id" value={post.id} />
        <button type="submit" className="btn">Save</button>
    </form>

    </div>
  )
}
