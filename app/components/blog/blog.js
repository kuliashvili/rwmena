import Image from "next/image"
import ".//blogs.css"
import Blogpic from "../../assets/blog.png"
function Blog(){
    return (
        <div className="blog" >
            <div className="blog-inner" >
                <Image className="blog-picture" src={Blogpic} width={360} height={240} layout="responsive" />
            </div>
        </div>
    )
}

export default Blog