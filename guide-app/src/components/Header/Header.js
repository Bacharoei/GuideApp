import React from "react";
import "./Header.css";

const Header = ({ children, header }) => {
  return (
    <>
      <header className={header}>{children}</header>
    </>
  );
};

Header.defaultProps = {
  header: "defaultHeader",
};

export default Header;
