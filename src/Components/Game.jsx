import React, { useState, useContext } from "react";
import Board from "./Board";
import ThemeContext from "../Context/ThemeContext";
import themes from "../Settings/Themes";

const Game = () => {
  const [actualTheme, setActualTheme] = useState(themes.dark);

  const [history, setHisory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const clickSquare = (i) => {
    const updatedHistory = history.slice(0, stepNumber + 1);
    const squares = updatedHistory[updatedHistory.length - 1].squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHisory(updatedHistory.concat([{ squares }]));
    setXIsNext(!xIsNext);
    setStepNumber(updatedHistory.length);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const returnHistoryToRender = () => {
    const updatedHistory = history;
    return updatedHistory.map((step, move) => {
      const description = move ? `Ir a la jugada #${move}` : `Ir al inicio`;
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
  };

  const changeTheme = () => {
    actualTheme.name === "light"
      ? setActualTheme(themes.dark)
      : setActualTheme(themes.light);
  };

  const gameInfoClass =
    actualTheme.name === "light" ? "light-theme-text" : "dark-theme-text";

  return (
    <ThemeContext.Provider value={actualTheme}>
      <div className="game" style={{ background: actualTheme.background }}>
        <div className="game-board">
          <Board
            nextPlayer={xIsNext}
            squares={history[stepNumber].squares}
            clickSquare={clickSquare}
            calculateWinner={calculateWinner}
          />
        </div>
        <div className={`game-info ${gameInfoClass}`}>
          <ol>{returnHistoryToRender()}</ol>
          <div>
            <button onClick={changeTheme}>Change theme</button>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Game;
