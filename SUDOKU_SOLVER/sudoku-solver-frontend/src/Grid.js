// src/Grid.js
import React from 'react';

const Grid = ({ board, onCellChange }) => {
  return (
    <table>
      <tbody>
        {board.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex}>
                <input
                  type="text"
                  value={cell === '.' ? '' : cell}
                  onChange={(e) => onCellChange(rowIndex, colIndex, e.target.value)}
                  maxLength={1}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
    