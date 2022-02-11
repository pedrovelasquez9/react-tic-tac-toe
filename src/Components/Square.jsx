import React from "react";

const Square = (props) => {
  const markedValue = props.value;
  const clickHandler = props.clickHandler;
  return (
    <button className="square" onClick={clickHandler}>
      {markedValue}
    </button>
  );
};

export default Square;
