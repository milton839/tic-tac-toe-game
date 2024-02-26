import { useState } from "react";
import Board from "../Board/Board";

export const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [valueIsNext, setValueIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove]

  const handlePlay = (nextSquares) =>{
        setValueIsNext(!valueIsNext)
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory([...history, nextSquares])
        // setHistory(nextHistory)
        setCurrentMove(nextHistory.length-1)
  }

  const jumpTo = (moveIndex) =>{
    // console.log(moveIndex)
    setCurrentMove(moveIndex)
    setValueIsNext(moveIndex % 2 === 0)
  }
  
  const moves = history.map((squares, moveIndex) =>{
    let description;
    if (moveIndex > 0) {
        description = `Go to the move # ${moveIndex}`;
    }
    else{
        description = `Go to start the game`;
    }
    return(
        <li key={moveIndex}>
            <button onClick={()=>jumpTo(moveIndex)}>{description}</button>
        </li>
    )
  })
  return (
    <div className="grid grid-cols-2 m-20">
      <div>
        <Board 
            valueIsNext={valueIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
        />
      </div>
      <div>
        <ol>
            {moves}
        </ol>
      </div>
    </div>
  );
};
