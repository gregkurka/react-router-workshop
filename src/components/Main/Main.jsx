import { Link, Routes, Route } from "react-router-dom";
import Red from "../Red/Red";
import Blue from "../Blue/Blue";
import Home from "../Home/Home";

function Main() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
      </Routes>
    </div>
  );
}

export default Main;
