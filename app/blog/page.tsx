'use client';

import { useEffect, useState } from "react";
// import { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/utils/getPosts";
import PostSearch from "@/components/Posts/PostSearch";
import Posts from "@/components/Posts/Posts";


// export const metadata: Metadata = {
//   title: "Blog Page | Blog Next App",
//   description: "Generated by create next app",
// };

type Post = {
  id: string;
  title: string;
  body: string;
};


export default function BlogPage() {

  let [posts, setPosts] = useState<any[]>([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, [])

  return (
    <section className="w-full mx-auto flex flex-col items-center" >
      <h1 className="mb-6">Blog Page</h1>
      <PostSearch onSearch={setPosts}/>
      {loading
        ? <h2>Loading ...</h2>
        : <Posts posts={posts} />
      }
      <Link href='/blog/new' className="mt-8 link">
        Create new post
      </Link>
    </section>
  )
}
