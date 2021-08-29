import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h3 className="nav__logo">GBV Community</h3>
      <div className="nav__links">
        <a href="/informationcenter">Information Center</a>
        <a href="/forum">Community Forum</a>
        <a href="/scheduleprivate">Schedule Private Session</a>
      </div>
    </div>
  );
}

export default Header;
