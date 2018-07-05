import Board from './board';

describe('Board', () => {
  let testBoard;

  beforeEach(() => {
    testBoard = new Board();
  });

  afterEach(() => {
    testBoard = null;
  });

  it('returns the difficulty integer', () => {
    expect(testBoard.difficulty.toString()).toMatch(/\d/);
  });

  it('returns a complete solution', () => {
    const flattenedArray = Array.prototype.concat(...testBoard.board);
    for (const digit of flattenedArray) {
      expect(digit).toBeTruthy();
    }
  });

  it('returns a puzzle with some indexes blank', () => {
    const flattenedArray = Array.prototype.concat(...testBoard.maskedBoard);
    expect(flattenedArray).toContain(null);
  });
});
