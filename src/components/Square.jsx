import { useState } from "react"

export default function Square() {
  const [value, setValue] = useState(null);
  function handleClick () {
    setValue('X');
  }
  return (
    <button onClick={handleClick} className="h-12 w-12 border
                                          text-amber-50
                                            cursor-pointer
                                            font-bold
                                            ">{value}</button>
  )
}
