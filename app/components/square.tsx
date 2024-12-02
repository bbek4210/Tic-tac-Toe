import React from "react";
interface squareProps {
  value: string;
  onClick: () => void;
}

const Square = ({ onClick, value }: squareProps) => {
  return (
    <button
      className={`border-2 border-gray-700 p-8 rounded-lg text-2xl font-bold text-gray-800 hover:bg-blue-300 focus:bg-blue-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110`}
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
