class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {

  constructor(size) {
    this.board = new Board(size);
    this.size = size;
    this.row = 0;
    this.col = 0;
    this.currentPosition = this.board[this.row][this.col];
    this.startPosition = this.board[this.row][this.col];
    this.goal = this.board[this.row.length - 1][this.row.length - 1];
    this.rowLimit = size;
    this.columnLimit = size;
  }

  solve() {
    let answer = 0;
    const up = this.board[row - 1][col];
    const down = this.board[row + 1][col];
    const left = this.board[row][col - 1];
    const right = this.board[row][col + 1];
    const options = [up, down, left, right];

    function recursionFunction(row, col) {

      function move(row, col) {
        if (row <= this.size && row >= 0) {
          if (col <= this.size && col >= 0) {
            while (row + 1 === false) {
              move(row + 1, col);
            }
          }
        }
      }
    }

    return result;
  }
}

module.exports = { RobotPaths };
