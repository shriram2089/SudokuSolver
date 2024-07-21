import React, { useState } from 'react';
import { Container, Button, Typography } from '@mui/material';
import SudokuGrid from './SudokuGrid';

const initialBoard = Array(9).fill(Array(9).fill(0));

const SudokuSolver = () => {
  const [board, setBoard] = useState(initialBoard);
  const [solved, setSolved] = useState(false);

  const handleInputChange = (e, row, col) => {
    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? parseInt(e.target.value || '0', 10) : cell
      )
    );
    setBoard(newBoard);
  };

  const solveSudoku = async () => {
    const response = await fetch('http://127.0.0.1:5000/solve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ board })
    });
    const data = await response.json();
    if (data.solved) {
      setBoard(data.board);
      setSolved(true);
    } else {
      setSolved(false);
      alert('No solution exists');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Sudoku Solver</Typography>
      <SudokuGrid board={board} handleInputChange={handleInputChange} />
      <Button variant="contained" color="primary" onClick={solveSudoku} style={{ marginTop: '20px' }}>
        Solve
      </Button>
      {solved && <Typography variant="h6" color="success.main" style={{ marginTop: '20px' }}>Solved!</Typography>}
    </Container>
  );
};

export default SudokuSolver;
