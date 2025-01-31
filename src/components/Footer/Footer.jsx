import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div style={{ display: "block", textAlign: "center" }}>© 2025</div>
    </>
  );
}

export default Footer;
