import React, { useEffect, useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  return (
    <div className={`navbar ${show && "nav-black"}`}>
      <img
        className="logo"
        src="http://www.pngmart.com/files/10/Netflix-Logo-PNG-Image.png"
        alt="Netflix "
      />
    </div>
  );
}

export default Navbar;
