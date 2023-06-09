import React from "react";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("clicked");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onClick}
        color="green"
        text="Add"
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
