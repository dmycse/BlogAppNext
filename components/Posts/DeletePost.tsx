import { deletePost } from "@/actions/posts";


export default function DeletePost({postId}: {postId: string}) {
  return (
    <form action={deletePost.bind(null, postId)}>
      <button type="submit" className="btn">Remove</button>
    </form>
  )
}
