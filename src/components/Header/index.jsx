import React from "react";
import SearchBar from "../SearchBar";
import Logo from "../Logo";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo small />
      <SearchBar />
    </header>
  );
};

export default Header;
