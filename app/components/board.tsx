import React from "react";
import Square from "./square";

interface boardProps {
  onClick: (index: number) => void;
}

const Board = ({ onClick }: boardProps) => {
  return (
    <div className="space-y-11 border-2 border-gray-500 p-6 rounded-lg">
      <div className="space-x-11">
        <Square onClick={() => onClick(0)} />
        <Square onClick={() => onClick(1)} />
        <Square onClick={() => onClick(2)} />
      </div>
      <div className="space-x-11">
        <Square onClick={() => onClick(3)} />
        <Square onClick={() => onClick(4)} />
        <Square onClick={() => onClick(5)} />
      </div>
      <div className="space-x-11">
        <Square onClick={() => onClick(6)} />
        <Square onClick={() => onClick(7)} />
        <Square onClick={() => onClick(8)} />
      </div>
    </div>
  );
};

export default Board;
