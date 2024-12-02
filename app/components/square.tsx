import React from "react";
interface squareProps {
  onClick: () => void;
}

const Square = (onClick: squareProps) => {
  return (
    <button className="border border-black p-6 rounded-lg" type="button">
      X
    </button>
  );
};

export default Square;
