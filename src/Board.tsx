import React from 'react';
import Square from './Square';

const Board: React.FC<{
    squares: (string | null)[];
    onClick: (index: number) => void;
  }> = ({ squares, onClick }) => {
    
    return (
        <div className='board-squares'>
            {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => onClick(index)} />
        ))}</div>
    );
  };

  export default Board;