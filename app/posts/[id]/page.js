import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();

  const posts = data.posts;

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function Post({ params }) {
  const { id } = params;

  try {
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!res.ok) {
      throw new Error("Post not found");
    }
    const post = await res.json();

    return (
      <div>
        <h1 className="blog-header">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
