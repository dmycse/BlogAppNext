import { NextResponse } from "next/server";
import  { headers, cookies } from 'next/headers';
import { redirect } from 'next/navigation'

export async function DELETE(req: Request, {params}: {params: { id: string }}) {
 
  let id = params.id;

  let headerList = headers();
  let type = headerList.get('Content-Type');

  let cookiesList = cookies();
  

  // logic of deleting post
  // redirect('/);

  return NextResponse.json({id, type})
}