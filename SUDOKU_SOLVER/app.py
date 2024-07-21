from flask import Flask, request, render_template
from sudoku_solver import solve_sudoku

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/solve', methods=['POST'])
def solve():
    board = request.form.get('board')
    board = [[int(num) for num in row.split()] for row in board.split('\n')]

    if solve_sudoku(board):
        solution = '\n'.join([' '.join(map(str, row)) for row in board])
        return render_template('index.html', board=solution, solved=True)
    else:
        return render_template('index.html', board='', solved=False)

if __name__ == "__main__":
    app.run(debug=True)
