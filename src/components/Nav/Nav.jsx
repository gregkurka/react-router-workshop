import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
    </div>
  );
}

export default Nav;
