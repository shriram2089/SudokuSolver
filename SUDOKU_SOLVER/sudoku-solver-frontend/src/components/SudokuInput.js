import React from 'react';
import { TextField } from '@mui/material';

const SudokuInput = ({ value, onChange }) => {
  return (
    <TextField
      type="number"
      inputProps={{ min: 0, max: 9 }}
      value={value === 0 ? '' : value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      size="small"
    />
  );
};

export default SudokuInput;
