import { ShuffleArray, RotateArray } from '../helpers/util';

describe('ShuffleArray', () => {
  it('Swaps places of values but keeps all values intact', () => {
    let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let shuffledArr = ShuffleArray([...testArr]);
    expect(shuffledArr).not.toEqual(testArr);
    shuffledArr.sort();
    expect(shuffledArr).toEqual(testArr);
  });
});

describe('RotateArray', () => {
  it('Rotates values but keeps all values intact', () => {
    let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let rotatedArr = RotateArray([...testArr], 3);
    expect(rotatedArr).not.toEqual(testArr);
    rotatedArr.sort();
    expect(rotatedArr).toEqual(testArr);
  });
});
