import Solver from './sudoku-solver';
import { VALID_BOARD, INVALID_BOARD_COLUMN, INVALID_BOARD_GROUP } from '../helpers/test-helper';

describe('Board Validity Checker', () => {
  it('returns true for a valid board', () => {
    expect(Solver.CheckBoardValidity(VALID_BOARD)).toBeTruthy();
  });

  it('returns false for an invalid board (by row)', () => {
    const board = VALID_BOARD;
    // Mess up a row
    board[0][0] = board[0][1];
    expect(Solver.CheckBoardValidity(board)).toBeFalsy();
  });

  it('returns false for an invalid board (by column)', () => {
    expect(Solver.CheckBoardValidity(INVALID_BOARD_COLUMN)).toBeFalsy();
  });

  it('returns false for an invalid board (by group)', () => {
    expect(Solver.CheckBoardValidity(INVALID_BOARD_GROUP)).toBeFalsy();
  });
});
