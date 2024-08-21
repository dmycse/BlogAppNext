import Link from "next/link"

type PostProps = {
  posts: any[];
};

export default function Posts( {posts}: PostProps ) {
  return (
    <ul className="list-disc">
        {posts && posts.map(post => (
          <li key={post.id} className="link">
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
  )
}
