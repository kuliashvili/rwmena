import Image from "next/image";
import "./styles.css";
import Supper from "../public/assets/lastsupper.jpg";
import Blog from "./components/blog/blog.js";
import blogData from "./data/blogs.json";
import Button from "./components/button/button";

export default function Home() {
  return (
    <>
      <div className="main">
        <Image
          className="main-picture"
          src={Supper}
          width={3000}
          height={1500}
          alt="last supper"
          layout="responsive"
          objectFit="cover"
        />
        <div className="overlay"></div>
      </div>
      <div className="blogs container">
        {blogData.map((blog) => (
          <Blog key={blog.id} title={blog.title} image={blog.image} />
        ))}
      </div>
      <Button redirectTo={"/info"} text={"Helloworld"}  />
      <div className="konteinrtest container">izi</div>
    </>
  );
}
