import React from "react";
import Square from "./Square";

const Board = (props) => {
  const nextPlayer = props.nextPlayer ? "X" : "O";
  const winner = props.calculateWinner(props.squares);
  const status = winner
    ? `The winner is: ${winner}`
    : `Next player: ${nextPlayer}`;

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
      <div className="status">{status}</div>
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
