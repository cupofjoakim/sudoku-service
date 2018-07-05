import { VALID_BOARD } from '../helpers/test-helper';
import SudokuGenerator from './sudoku-generator';

describe('generateBoard', () => {
  it('returns a complete solution', () => {
    const board = SudokuGenerator.generateBoard();
    let flattenedArray = Array.prototype.concat(...board);
    for (let digit of flattenedArray) {
      expect(digit).toBeTruthy();
    }
  });

  it('returns false if exceeding the try limit', () => {
    const board = SudokuGenerator.generateBoard(10);
    expect(board).toBeFalsy();
  });
});

describe('maskBoard', () => {
  it('returns a puzzle with some indexes blank', () => {
    const difficulty = 3;
    const maskedBoard = SudokuGenerator.maskBoard(VALID_BOARD, difficulty);
    let flattenedArray = Array.prototype.concat(...maskedBoard);
    expect(flattenedArray).toContain(null);
  });
});
