
// Sequence of moves of a knight on a chessboard such that the knight visits every square exactly once
class OpenKnightTour {
  constructor (size) {
    this.board = new Array(size).fill(0).map(() => new Array(size).fill(0))
    this.size = size
  }

  // helper function to get the valid moves of the knight from the current position
  getMoves ([i, j]) {
    const moves = [
      [i + 2, j - 1],
      [i + 2, j + 1],
      [i - 2, j - 1],
      [i - 2, j + 1],
      [i + 1, j - 2],
      [i + 1, j + 2],
      [i - 1, j - 2],
      [i - 1, j + 2]
    ]

    return moves.filter(([y, x]) => y >= 0 && y < this.size && x >= 0 && x < this.size)
  }

  // helper function to check if the board is complete
  isComplete () {
    return !this.board.map(row => row.includes(0)).includes(true)
  }

  // function to find the solution for the given board
  solve () {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.solveHelper([i, j], 0)) return true
      }
    }
    return false
  }

  // helper function for the main computation
  solveHelper ([i, j], curr) {
    if (this.isComplete()) return true

    for (const [y, x] of this.getMoves([i, j])) {
      if (this.board[y][x] === 0) {
        this.board[y][x] = curr + 1
        if (this.solveHelper([y, x], curr + 1)) return true
        // backtracking
        this.board[y][x] = 0
      }
    }
    return false
  }

  // utility function to display the board
  printBoard () {
    for (const row of this.board) {
      let string = ''
      for (const elem of row) {
        string += elem + '\t'
      }
      console.log(string)
    }
  }
}

function main () {
  const board = new OpenKnightTour(5)

  board.printBoard()
  console.log('\n')

  board.solve()

  board.printBoard()
}

main()
