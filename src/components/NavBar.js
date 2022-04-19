import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
    return(
        <div className="ulDiv" >
            <ul className="navbar">
                <Link to="/"><li>Home</li></Link>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/signup"><li>Sign Up</li></Link>
                <Link to="/buycar"><li>Buy Car</li></Link>
                <Link to="/sellcar"><li>Sell Car</li></Link>
            </ul>
        </div>
    )
}


export default NavBar;