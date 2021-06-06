import React from "react";
import "./Header.css";
import Search from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <section className="header__logo">
        <img src="/DocBookLogo.png" alt="logo" width={100} height={40} />
      </section>
      <section className="header__search">
        <input type="text" placeholder="Search..." />
        <Search />
      </section>
      <section className="header__profilePhoto">
        <Avatar />
      </section>
    </div>
  );
}

export default Header;
