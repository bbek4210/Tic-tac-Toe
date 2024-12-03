"use client";
import React, { useEffect, useState } from "react";
import Board from "./components/board";

const page = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const checkWinner = () => {
    const winIndex = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winIndex.length; i++) {
      const [a, b, c] = winIndex[i];
      if (value[a] === value[b] && value[a] === value[c]) {
        return value[a];
      }
    }
    return null;
  };

  const isBoardFull = () => {
    return value.every((square) => square !== null);
  };

  const handleClick = (index: number) => {
    if (value[index] === null && !winner && !isDraw) {
      const updateValue = [...value];
      updateValue[index] = currentPlayer;
      setValue(updateValue);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const handleChangePlayer = () => {
    setCurrentPlayer("O");
  };
  const hanldeNewGame = () => {
    setValue(Array(9).fill(null));
    setWinner(null);
    setIsDraw(false);
  };

  useEffect(() => {
    const newWinner = checkWinner();
    if (newWinner) {
      setWinner(newWinner);
    } else if (isBoardFull()) {
      setIsDraw(true);
    }
  });

  return (
    <div className="flex items-center h-screen justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div className=" flex flex-col items-center gap-8 p-10 bg-white rounded-lg shadow-2xl">
        <h1 className="font-bold text-4xl text-purple-900"> Tic-Tac-Toe</h1>
        <Board onClick={handleClick} value={value} />
        {winner ? (
          <h2 className="text-xl font-semibold text-red-600">
            Winner:{"  "}
            {winner}
          </h2>
        ) : isDraw ? (
          <h2 className="text-xl font-semibold text-orange-500">Match Draw</h2>
        ) : (
          <h2 className="text-xl font-semibold text-blue-700">
            Player Turn :{"  "}
            {currentPlayer}
          </h2>
        )}

        <button
          className="px-4 py-2 border-2 border-yellow-400 text-yellow-400 font-semibold rounded hover:bg-yellow-400 hover:text-white transition-colors duration-300"
          onClick={hanldeNewGame}
        >
          Start new game
        </button>
      </div>
    </div>
  );
};

export default page;
