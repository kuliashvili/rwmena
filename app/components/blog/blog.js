import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./blog.css"; // Adjust the path if needed

function Blog({ title, image, id }) {
  return (
    <Link href={`/posts/${id}`} className="blog-wrapper">
    <div className="blog">
      
        {/* Wrapping entire blog item in a Link for navigation */}
        <div className="blog-inner">

          <img className="blog-picture" src={image} alt={title} ></img>
          <h2 className="blog-header">{title}</h2>
        </div>
      
    </div>
    </Link>
  );
}

export default Blog;
