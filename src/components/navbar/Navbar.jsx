import React from "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navBarContainer">
        <span className="logo">Et-Booking</span>
        <div className="navBarItem">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
