import Header from "./components/header/header";
import Image from "next/image";
import "./styles.css";
import Supper from "./assets/lastsupper.jpg"
import Blog from "./components/blog/blog"

export default function Home() {
  return (
    <>
      <div className="main container ">
        <Image className="main-picture"  src={Supper} width={3000} height={1500} alt="last supper" layout="responsive" />
      </div>
      <div className="blogs">
        <Blog/>
        <Blog/>
        <Blog/>
      </div>
      <div className="konteinrtest container">izi</div>
    </>
  );
}
