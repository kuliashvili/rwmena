import Image from "next/image"
import ".//blogs.css"
import Blogpic from "../../../public/assets/blog.png"
import blogData from "../../data/blogs.json"
function Blog({title, image}){
    return (
        <div className="blog" >
            <div className="blog-inner" >
                <Image className="blog-picture" src={image} width={360} height={240} layout="responsive" alt="jesus christ" />
                <h2 className="blog-header" >{title}</h2>
            </div>
        </div>
    )
}

export default Blog