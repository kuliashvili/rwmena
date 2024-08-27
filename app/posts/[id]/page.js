import { notFound } from "next/navigation";

// Define API endpoint URL
const API_URL = "https://dummyjson.com/posts";

// Function to generate static parameters for dynamic routes
export async function generateStaticParams() {
  const res = await fetch(API_URL);
  
  // Check if the fetch response is OK
  if (!res.ok) {
    console.error("Failed to fetch posts for static params");
    return [];
  }

  const data = await res.json();

  // Ensure that data is in the expected format
  const posts = data.posts || [];

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

// Component to display individual posts
export default async function Post({ params }) {
  const { id } = params;

  try {
    // Fetch the post data
    const res = await fetch(`${API_URL}/${id}`);
    
    // Check if the response is not OK
    if (!res.ok) {
      console.error(`Post not found: ${id}`);
      notFound();
    }

    const post = await res.json();

    // Check if the post object exists
    if (!post || !post.title) {
      notFound();
    }

    // Return the post details if found
    return (
      <div>
        <h1 className="blog-header">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  } catch (error) {
    // Log error for debugging
    console.error("Error fetching post data:", error);
    notFound();
  }
}
