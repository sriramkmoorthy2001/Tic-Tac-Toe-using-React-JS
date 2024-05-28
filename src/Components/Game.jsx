import { useState } from "react"
import "./game.css"
let  Square = ({value , onSquareClick}) => {
    return (
        <button className="square" onClick={ onSquareClick }>{value}</button>
    )
}
let Board = () => {
    const[squares,setSquares] = useState(Array(9).fill(null));
    function handleClick(i) {
        const nextSquares = squares.slice();
        nextSquares[i] = "X";
        setSquares(nextSquares);
        console.log("clicked")
    }
    return (
        <div className="container">
            <div className="board-row">
                <Square values = {squares[0]} onSquareClick ={ () => handleClick(0)} />
                <Square values = {squares[1]} onSquareClick ={ () => handleClick(1)} />
                <Square values = {squares[2]} onSquareClick ={ () => handleClick(2)} />
            </div>
           <div className="board-row">
                <Square values = {squares[3]} onSquareClick ={ () => handleClick(3)} />
                <Square values = {squares[4]} onSquareClick ={ () => handleClick(4)} />
                <Square values = {squares[5]} onSquareClick ={ () => handleClick(5)} />
           </div>
            <div className="board-row">
                <Square values = {squares[6]} onSquareClick ={ () => handleClick(6)} />
                <Square values = {squares[7]} onSquareClick ={ () => handleClick(7)} />   
                <Square values = {squares[8]} onSquareClick ={ () => handleClick(8)} />   
            </div>
        </div>
    )
} 
export default Board  