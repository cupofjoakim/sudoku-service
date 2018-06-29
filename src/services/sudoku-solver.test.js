import { CheckBoardValidity } from './sudoku-solver';
import { VALID_BOARD, INVALID_BOARD } from '../helpers/test-helper';

describe('Board Validity Checker', () => {
  it('returns true for a valid board', () => {
    expect(CheckBoardValidity(VALID_BOARD)).toBeTruthy();
  });

  it('returns false for an invalid board', () => {
    expect(CheckBoardValidity(INVALID_BOARD)).toBeFalsy();
  });
});
