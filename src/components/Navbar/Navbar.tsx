import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><h1>#VANLIFE</h1></Link>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
        </nav>    
    )
}