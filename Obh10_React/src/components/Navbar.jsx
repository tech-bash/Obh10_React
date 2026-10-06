import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to = "/">Home</Link> {" "}
            <Link to = "/About">About</Link>{" "}
            <Link to = "/ProductDetails">Products</Link> {" "} 
            <Link to = "/Login" >Login </Link> {" "}
        </nav>
    )
}


export default Navbar;