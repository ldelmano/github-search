import React from "react";
import Logo from "../../components/Logo";
import "./styles.scss";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Logo />

        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
