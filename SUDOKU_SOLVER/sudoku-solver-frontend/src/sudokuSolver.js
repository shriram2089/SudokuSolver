// src/sudokuSolver.js

export function solveSudoku(board) {
    function isValid(board, row, col, num) {
      for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num) return false;
        const boxRow = Math.floor(row / 3) * 3 + Math.floor(i / 3);
        const boxCol = Math.floor(col / 3) * 3 + (i % 3);
        if (board[boxRow][boxCol] === num) return false;
      }
      return true;
    }
  
    function solve(board) {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (board[row][col] === '.') {
            for (let num = 1; num <= 9; num++) {
              const numChar = num.toString();
              if (isValid(board, row, col, numChar)) {
                board[row][col] = numChar;
                if (solve(board)) return true;
                board[row][col] = '.'; // backtrack
              }
            }
            return false; // trigger backtracking
          }
        }
      }
      return true; // solved
    }
  
    const boardCopy = board.map(row => [...row]);
    solve(boardCopy);
    return boardCopy;
  }
  