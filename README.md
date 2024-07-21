# SudokuSolver
The Sudoku Solver Web Application is an interactive tool designed to help users solve Sudoku puzzles. Utilizing a combination of modern web technologies, this project provides a user-friendly interface to input Sudoku puzzles and leverages a backend algorithm to solve them efficiently.

Technologies Used
Frontend:

React.js: For building the user interface.
HTML/CSS: For structuring and styling the web pages.
JavaScript: For adding interactivity and handling user input.
Backend:

Flask: A lightweight WSGI web application framework in Python.
Python: For the implementation of the Sudoku solving algorithm.
Features
Interactive Sudoku Grid: Users can manually input numbers into the Sudoku grid.
Solve Functionality: A button to trigger the backend solver, which processes the inputted Sudoku puzzle and returns the solved puzzle.
Clear and Reset Options: Options to clear the grid and reset the application for a new puzzle.
Responsive Design: The application is designed to work on various screen sizes, including desktops and mobile devices.
Implementation Details
Frontend (React):

Components:

App.js: The main component managing the state and rendering other components.
Grid.js: A component to render the Sudoku grid and handle cell inputs.
Solver.js: A component with a button to solve the Sudoku.
Input.js: A component to handle bulk input of Sudoku puzzles.
State Management:

Use of useState to manage the Sudoku board's state and track changes.
Styles:

Custom CSS to ensure the application is visually appealing and user-friendly.
Backend (Flask):

API Endpoints:

/solve: An endpoint to receive the Sudoku puzzle, process it using the solver algorithm, and return the solved puzzle.
Sudoku Solving Algorithm:

A Python implementation using a backtracking algorithm optimized with hashmaps to efficiently solve the puzzle.
Getting Started
Prerequisites:

Node.js and npm (for frontend development)
Python and Flask (for backend development)

Usage Instructions
Input Sudoku Puzzle: Manually input the Sudoku puzzle into the grid.
Solve Puzzle: Click the "Solve" button to send the puzzle to the backend and receive the solution.
Clear/Reset Puzzle: Use the provided buttons to clear the grid or reset the application for a new puzzle.
