import { Metadata } from "next";
import { getPostById } from "@/utils/getPosts";
import DeletePost from "@/components/Posts/DeletePost";
import Link from "next/link";

type PostProps = {
  params: {
    id: string;
  };
};


export async function generateMetadata({params: { id }}: PostProps): Promise<Metadata> {
  let post = await getPostById(id);

  return {
    title: `Post ${id} | Blog Next App`,
    description: post.title
  }
}

export default async function Post( {params: { id }}: PostProps ) {

  let post = await getPostById(id);

  return (
    <>
      {post && (
        <article className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-orange-600">Post {id}</h1>
          <h2 className="font-semibold text-cyan-600">{post.title}</h2>
          <p>{post.body}</p>
          <div className="flex gap-4">
            <Link href={`/blog/${post.id}/edit`} className="btn">Edit</Link>
            <DeletePost postId={post.id} />
          </div>
        </article>
      )}
    </>
  )
}
