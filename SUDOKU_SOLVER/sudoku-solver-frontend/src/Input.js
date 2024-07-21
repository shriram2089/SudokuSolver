// src/Input.js
import React, { useState } from 'react';

const Input = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Sudoku"
      />
      <button type="submit">Load Sudoku</button>
    </form>
  );
};

export default Input;
