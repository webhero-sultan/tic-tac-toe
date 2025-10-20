import Square from "./Square";


export default function Board() {
  return (
    <>
      <div className="flex">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="flex">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="flex">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  )
}
