import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2>StyleE-commerce</h2>
            <ul className="menu">
                <li className="menuItem">
                    <Link to="/">Home</Link>
                </li>
                <li className="menuItem">
                    <Link to="/products">Products</Link>
                </li>
                <li className="menuItem">
                    <Link to="/users">Users</Link>
                </li>
                <li className="menuItem">
                    <Link to="/cart">Cart</Link>
                </li>
                <li className="menuItem">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;