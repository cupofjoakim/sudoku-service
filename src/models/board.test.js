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
    let flattenedArray = Array.prototype.concat(...testBoard.board);
    for (let digit of flattenedArray) {
      expect(digit).toBeTruthy();
    }
  });

  it('returns a puzzle with some indexes blank', () => {
    let flattenedArray = Array.prototype.concat(...testBoard.maskedBoard);
    expect(flattenedArray).toContain(null);
  });
});
