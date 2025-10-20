import { useState } from "react"

export default function Square() {
  const [value, setValue] = useState(null);
  function handleClick () {
    setValue('X');
  }
  return (
    <button onClick={handleClick} className="h-15 w-15 border-2 border-white text-amber-50 cursor-pointer font-bold">{value}</button>
  )
}
