import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [navbarBlack, setNavbarBlack] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavbarBlack(true);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <nav className={`${navbarBlack && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://i0.wp.com/www.downloadfonts.io/wp-content/uploads/2021/09/Netflix-Logo-Font.png?fit=1024%2C581&ssl=1"
        />
        <></>
      </div>
    </nav>
  );
}

export default Nav;
