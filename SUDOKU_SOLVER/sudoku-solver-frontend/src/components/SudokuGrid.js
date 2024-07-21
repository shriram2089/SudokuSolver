import React from 'react';
import { Grid, TextField } from '@mui/material';

const SudokuGrid = ({ board, handleInputChange }) => {
  return (
    <Grid container spacing={1}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Grid item xs={1} key={`${rowIndex}-${colIndex}`}>
            <TextField
              type="number"
              inputProps={{ min: 0, max: 9 }}
              value={cell === 0 ? '' : cell}
              onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default SudokuGrid;
