import { useState } from "react";
import Square from "./Square";


export default function Board() {
  const [squares, setSquares] = useState([]);
  function handleClick(i) {
    const nextSquares = squares.slice(); // clone squares =====
    nextSquares[i] = 'X'; // set the value of index 0 =====
    setSquares(nextSquares); // update value =====
  }
  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={()=> handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={()=> handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=> handleClick(2)}/>
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={()=> handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={()=> handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={()=> handleClick(5)}/>
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={()=> handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={()=> handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={()=> handleClick(8)}/>
      </div>
    </>
  )
}
