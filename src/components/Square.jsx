// import { useState } from "react"

export default function Square({value, onSquareClick}) {
  // const [value, setValue] = useState(null);
  // function handleClick () {
  //   setValue('X');
  // }
  return (
    <button onClick={onSquareClick} className="h-20 w-20 border-2 text-white text-5xl cursor-pointer glow-blue border-white glow-border rounded-2xl">{value}</button>
  )
}
