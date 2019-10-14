import React from "react";
import search from "../../assets/search-icon.svg";
import "./styles.scss";

const SearchBar = () => {
  return (
    <form className="searchbar">
      <input type="text" className="searchbar__input" required />
      <button className="searchbar__btn">
        <img src={search} alt="Search Github user" />
      </button>
    </form>
  );
};

export default SearchBar;
