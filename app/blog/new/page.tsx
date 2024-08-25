import { redirect } from 'next/navigation';
import NewPostForm from '../../../components/Posts/NewPostForm';

export default function NewPost() {
  return (
    <>
      <h1 className="text-center font-bold text-orange-500">Create new post</h1>
      <NewPostForm onSuccess={async (id) => {
        'use server';
        redirect(`/blog/${id}`)
      }}/>
    </>
  )
}
