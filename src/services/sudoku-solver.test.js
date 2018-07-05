import { CheckBoardValidity } from './sudoku-solver';
import { VALID_BOARD, INVALID_BOARD } from '../helpers/test-helper';

describe('Board Validity Checker', () => {
  it('returns true for a valid board', () => {
    expect(CheckBoardValidity(VALID_BOARD)).toBeTruthy();
  });

  it('returns false for an invalid board (by row)', () => {
    let board = INVALID_BOARD;
    // Mess up a row
    board[0][0] = board[0][1];
    expect(CheckBoardValidity(board)).toBeFalsy();
  });

  it('returns false for an invalid board (by column)', () => {
    expect(CheckBoardValidity(INVALID_BOARD)).toBeFalsy();
  });
});
