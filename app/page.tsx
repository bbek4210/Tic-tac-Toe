import React from "react";
import Board from "./components/board";

const page = () => {
  const handleClick = () => {};

  return (
    <div className="flex items-center h-screen justify-center">
      <div className=" flex flex-col gap-10">
        <span className="items-center flex justify-center font-bold text-3xl text-orange-600">
          {" "}
          Tic-Tac-Toe
        </span>
        <Board onClick={handleClick} />
      </div>
    </div>
  );
};

export default page;
