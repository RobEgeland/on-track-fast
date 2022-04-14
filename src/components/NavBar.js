import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
    return(
        <div >
            <ul className="navbar">
                <Link to="/"><li>Home</li></Link>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/signup"><li>SignUp</li></Link>
                <Link to="/buycar"><li>BuyCar</li></Link>
                <Link to="/sellcar"><li>SellCar</li></Link>
            </ul>
        </div>
    )
}


export default NavBar;