// src/App.js
import React, { useState } from 'react';
import Grid from './Grid';
import Solver from './Solver';
import Input from './Input';
import { solveSudoku } from './sudokuSolver';

function App() {
  const [board, setBoard] = useState(Array(9).fill().map(() => Array(9).fill('.')));
  const [solvedBoard, setSolvedBoard] = useState(null);

  const handleCellChange = (row, col, value) => {
    const newBoard = board.map(r => r.slice());
    newBoard[row][col] = value;
    setBoard(newBoard);
  };

  const handleSolve = () => {
    const solved = sol  veSudoku(board);
    setSolvedBoard(solved);
  };

  const handleLoad = (input) => {
    const newBoard = Array(9).fill().map(() => Array(9).fill('.'));
    const rows = input.split('\n');
    rows.forEach((row, rowIndex) => {
      const cells = row.split(' ');
      cells.forEach((cell, colIndex) => {
        newBoard[rowIndex][colIndex] = cell;
      });
    });
    setBoard(newBoard);
  };

  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      <Input onSubmit={handleLoad} />
      <Grid board={board} onCellChange={handleCellChange} />
      <Solver onSolve={handleSolve} />
      {solvedBoard && (
        <div>
          <h2>Solved Sudoku:</h2>
          <Grid board={solvedBoard} onCellChange={() => {}} />
        </div>
      )}
    </div>
  );
}

export default App;
