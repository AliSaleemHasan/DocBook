import React from "react";
import "./Header.css";
import Search from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Selector as userSelector } from "../../redux/slices/userSlice";
import { useSelector } from "react-redux";
function Header() {
  const user = useSelector(userSelector);
  return (
    <div className="header">
      <section className="header__logo">
        <img src="/DocBookLogo.png" alt="logo" width={100} height={40} />
      </section>
      <section className="header__search">
        <input type="text" placeholder="Search..." />
        <Search />
      </section>
      {user ? (
        <section className="header__avatar">
          <Avatar />
        </section>
      ) : (
        <section className="header__login">
          <Link to="/login">Log in</Link>
        </section>
      )}
    </div>
  );
}

export default Header;
