import React from "react";
import "./styles.scss";

const Logo = ({ small }) => {
  return (
    <div className={small ? "logo logo--small" : "logo"}>
      <h2>
        <span className="logo__github">Github</span>
        <span className="logo__search"> Search</span>
      </h2>
    </div>
  );
};

export default Logo;
