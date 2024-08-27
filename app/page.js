"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./styles/globals.css";
import "./styles.css";
import blogData from "./data/blogs.json";
import Button from "./components/button/button";
import quotes from "./data/quotes";
import Link from "next/link";
import Blog from "./components/blog/blog.js";

export default function Home() {
  const [currentQuoteIndex, setQurrentQuoteIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/posts");
        const { posts } = await res.json();
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setFadeClass("");
      setTimeout(() => {
        setQurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFadeClass("fade-in");
      }, 1000);
    }, 10000);

    return () => clearInterval(quoteInterval);
  }, []);
  return (
    <>
      <div className="main">
        <h1 className={`main-header ${fadeClass}`}>
          {quotes[currentQuoteIndex]}
        </h1>
      </div>
      <div className="blogs container">
        {blogData.map((blog) => (
          <Blog key={blog.id} title={blog.title} image={blog.image} />
        ))}
      </div>
      <div className="container">
        <h1 className="heading">ბლოგები</h1>
        <div className="blogs" style={{ paddingTop: "40px" }}>
          {posts.map((post) => (
            <Link className="blog" href={`/posts/${post.id}`} key={post.id}>
              <div key={post.id}>
                <h2 className="blog-header">{post.title}</h2>
                {/* <p>{post.body}</p> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Button className="buttonn" redirectTo={"/info"} text={"Helloworld"} />
    </>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import "./styles/globals.css";
// import "./styles.css";
// import Blog from "./components/blog/blog.js";
// import blogData from "./data/blogs.json";
// import Button from "./components/button/button";
// import quotes from "./data/quotes";

// export default function Home() {
//   const [currentQuoteIndex, setQurrentQuoteIndex] = useState(0);
//   const [fadeClass, setFadeClass] = useState("fade-in");

//   useEffect(() => {
//     const quoteInterval = setInterval(() => {
//       setFadeClass("");
//       setTimeout(() => {
//         setQurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
//         setFadeClass("fade-in")
//       }, 1000);

//     }, 10000);

//     return () => clearInterval(quoteInterval);
//   }, []);
//   return (
//     <>
//       <div className="main">
//         <h1 className={`main-header ${fadeClass}`}>{quotes[currentQuoteIndex]}</h1>
//       </div>
//       <div className="blogs container">
//         {blogData.map((blog) => (
//           <Blog key={blog.id} title={blog.title} image={blog.image} />
//         ))}
//       </div>
//       <Button redirectTo={"/info"} text={"Helloworld"} />
//       <div className="konteinrtest container">izi</div>
//     </>
//   );
// }
