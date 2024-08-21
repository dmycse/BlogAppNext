const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getPosts() {
  let response = await fetch(API_URL, {
    next: {
      revalidate: 60
    }
  });

  if (!response.ok) {
    throw new Error('Unable to fetch post');
  }
  
  return response.json();
}

export async function getPost(id: string) {
  let response = await fetch(`${API_URL}/${id}`, {
    next: {
      revalidate: 60
    }
  });
  
  return response.json();
}

export async function getPostsBySearch(search: string) {
  let response = await fetch(`${API_URL}?q=${search}`);

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};