import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav border-bottom mb-5">
      <NavLink to="/movies" className="nav-link cursor">
        Movies
      </NavLink>

      <NavLink to="/customers" className="nav-link cursor">
        Customers
      </NavLink>

      <NavLink to="/rentals" className="nav-link cursor">
        Rentals
      </NavLink>

     {/*  <NavLink to="/login-form" className="nav-link cursor">
        Login
      </NavLink> */}
      <NavLink to="/register" className="nav-link cursor">
        Register
      </NavLink>
    </nav>
  );
};

export default Navbar;
