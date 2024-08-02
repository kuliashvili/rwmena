
import "./header.css"
import Image from "next/image"
import Reader from "../../assets/reading.jpg"
function Header(){
    return (
        <div className="header" >
            <div className="header-inner" >
                <div className="header-left" >
                    <Image className="logo"  src={Reader} width={60} height={60} alt="man reading book" />
                </div>
                <div className="header-right" >
                    <div className="header-item" >
                        <p className="header-item-text" >მთავარი</p>
                    </div>
                    <div className="header-item" >
                        <p className="header-item-text" >ბლოგები</p>
                    </div>
                    <div className="header-item" >
                        <p className="header-item-text" >ინფორმაცია</p>
                    </div>
                    <div className="header-item" >
                        <p className="header-item-text" >კონტაქტი</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header