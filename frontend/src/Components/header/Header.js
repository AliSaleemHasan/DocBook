import React from "react";
import "./Header.css";
import Search from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
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
      <section className="header__login">
        {/* <Avatar /> */}
        <Link to="/login">Log in</Link>
      </section>
    </div>
  );
}

export default Header;
