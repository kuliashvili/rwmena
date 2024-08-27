import blogData from "../../data/blogs.json";
import Image from "next/image";

// Function to generate static parameters for dynamic routes
export async function generateStaticParams() {
  const posts = blogData || [];

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function Post({ params }) {
  const { id } = params;

  const post = blogData.find((post) => post.id.toString() === id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Image src={post.image} width={120} height={80} alt={post.title} />
      <h1 className="blog-header">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
