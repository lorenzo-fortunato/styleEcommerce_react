import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = (): void => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <h2 className="titleLogin">Style E-Commerce!</h2>
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
          <button className="btnLogout" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
