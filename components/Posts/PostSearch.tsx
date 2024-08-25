'use client';

import { getPostsBySearch } from "@/utils/getPosts";
import { FormEventHandler, useState } from "react";

type PostSearchProps = {
  onSearch: (value: any[]) => void;
}

export default function PostSearch( {onSearch}:PostSearchProps ) {

  let [search, setSearch] = useState('');

  let handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    let posts = await getPostsBySearch(search);
    onSearch(posts);
  }


  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-4">
      <input 
        type="search" 
        placeholder="search" 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  )
}
