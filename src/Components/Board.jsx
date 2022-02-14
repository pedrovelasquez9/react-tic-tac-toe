import React, { useContext } from "react";
import Square from "./Square";
import ThemeContextObject from "../Context/ThemeContext";

const Board = (props) => {
  const appliedTheme = useContext(ThemeContextObject);

  const nextPlayer = props.nextPlayer ? "X" : "O";
  const winner = props.calculateWinner(props.squares);
  const status = winner
    ? `The winner is: ${winner}`
    : `Next player: ${nextPlayer}`;

  const themeClasses =
    appliedTheme.name === "light"
      ? "status light-theme-text"
      : "status dark-theme-text";

  const renderSquare = (i) => {
    return (
      <Square
        value={props.squares[i]}
        clickHandler={() => props.clickSquare(i)}
      />
    );
  };

  return (
    <div>
      <div className={themeClasses}>{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
