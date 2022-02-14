import React, { useContext } from "react";
import ThemeContextObject from "../Context/ThemeContext";

const Square = (props) => {
  const appliedTheme = useContext(ThemeContextObject);
  const markedValue = props.value;
  const clickHandler = props.clickHandler;
  const themeClasses =
    appliedTheme.name === "light" ? "square-light" : "square-dark";
  return (
    <button className={themeClasses} onClick={clickHandler}>
      {markedValue}
    </button>
  );
};

export default Square;
