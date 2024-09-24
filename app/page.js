"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./styles/globals.css";
import "./styles.css";
import blogData from "./data/blogs.json";
import Button from "./components/button/button";
import quotes from "./data/quotes"
import Blog from "./components/blog/blog.js"

export default function Home() {
  const [currentQuoteIndex, setQurrentQuoteIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

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
          <Blog
            key={blog.id}
            id={blog.id}
            title={blog.title}
            image={blog.image}
          />
        ))}
      </div>

      <Button className="buttonn" redirectTo={"/blog"} text={"ნახე ყველა ბლოგი"} />
    </>
  );
}
