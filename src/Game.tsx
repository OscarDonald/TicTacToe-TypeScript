import React, { useState } from 'react';
import Board from './Board';

const Game: React.FC = () => {
    const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const handleClick = (index: number) => {
        if (squares[index]) {
            return;
        }

        const newSquares = squares.slice();
        newSquares[index] = isXTurn ? 'X' : 'O';
        setSquares(newSquares);
        setIsXTurn(!isXTurn);
    };

    const handleReset = () => {
        setSquares(Array(9).fill(null));
        setIsXTurn(true);
    };

    return (
        <div className='game'>
            <h1>TicTacToe</h1>
            <Board squares={squares} onClick={handleClick} />
            <button className='resetBtn' onClick={handleReset}>
                Reset Game
            </button>
        </div>
    );
};

export default Game;
