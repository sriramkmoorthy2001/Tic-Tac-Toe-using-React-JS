import { useState } from "react"
import "./game.css"
let  Square = () => {
    const [value, setValue] = useState(null);
    function handleclick(){
        setValue("X")
    }
    return (
        <button className="square" onClick={handleclick}>{value}</button>
    )
}
let Board = () => {
    return (
        <div className="container">
            <div className="board-row">
                <Square  />
                <Square  />
                <Square  />
            </div>
           <div className="board-row">
                <Square  />
                <Square  />
                <Square  />
           </div>
            <div className="board-row">
                <Square  />
                <Square  />   
                <Square  />   
            </div>
        </div>
    )
} 
export default Board  