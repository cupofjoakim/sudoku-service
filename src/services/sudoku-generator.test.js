import SudokuGenerator from './sudoku-generator';

describe('newPuzzle', () => {
  let puzzleObject;

  beforeEach(() => {
    puzzleObject = SudokuGenerator.newPuzzle(3);
  });

  afterEach(() => {
    puzzleObject = null;
  });

  it('returns the difficulty integer', () => {
    expect(puzzleObject.difficulty.toString()).toMatch(/\d/);
  });

  it('returns a complete solution', () => {
    let flattenedArray = Array.prototype.concat(...puzzleObject.solution);
    for (let digit of flattenedArray) {
      expect(digit).toBeTruthy();
    }
  });

  it('returns a puzzle with some indexes blank', () => {
    let flattenedArray = Array.prototype.concat(...puzzleObject.puzzle);
    expect(flattenedArray).toContain(null);
  });
});
