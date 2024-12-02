import React from "react";
import Square from "./square";

interface boardProps {
  value: string[];
  onClick: (index: number) => void;
}

const Board = ({ onClick, value }: boardProps) => {
  return (
    <div className="border-4 border-gray-800 p-4 rounded-lg shadow-xl bg-gray-200">
      <div className="grid grid-cols-3 gap-4">
        {value.map((val, index) => (
          <Square key={index} onClick={() => onClick(index)} value={val} />
        ))}
      </div>
    </div>
  );
};

export default Board;
