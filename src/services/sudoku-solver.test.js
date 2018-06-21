import { CheckBoardValidity } from './sudoku-solver';
import { GetFullBoard } from '../helpers/test-helper';

describe('Board Validity Checker', () => {
  it('returns true for a valid board', () => {
    const board = GetFullBoard(true);
    expect(CheckBoardValidity(board)).toBeTruthy();
  });

  it('returns false for an invalid board', () => {
    const board = GetFullBoard(false);
    expect(CheckBoardValidity(board)).toBeFalsy();
  });
});
