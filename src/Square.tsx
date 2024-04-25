import React from 'react';

// Define the Square component
const Square: React.FC<{
  value: string | null;
  onClick: () => void;
}> = ({ value, onClick }) => {
  return (
    <button
    className='squares'
      onClick={onClick}
    >
      {value}
    </button>
  );
};

// Export the Square component as the default export
export default Square;
