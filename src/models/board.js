import SudokuGenerator from '../services/sudoku-generator';

class Board {
  constructor(difficulty = 3) {
    this.difficulty = difficulty;
    this.board = SudokuGenerator.generateBoard();
    this.maskedBoard = SudokuGenerator.maskBoard(this.board, difficulty);
  }

  getPuzzle() {
    return {
      difficulty: this.difficulty,
      solution: this.board,
      puzzle: this.maskedBoard,
    };
  }
}

export default Board;
