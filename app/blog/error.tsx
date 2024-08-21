'use client';


export default function ErrorPage( {error}: {error: Error}) {
  return (
    <h1 className="text-center font-bold text-red-600">! Error: {error.message}</h1>
  )
}
