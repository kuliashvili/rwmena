import Link from "next/link"
import ".//button.css"

function Button({text, redirectTo}){


    return(
        <Link href={redirectTo} > 
        <button  className="button" >{text}</button>
        </Link>
        
    )
}

export default Button