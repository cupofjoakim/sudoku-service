import { ShuffleArray, RotateArray } from '../helpers/util';
import { CheckBoardValidity } from './sudoku-solver';

const createFilledBoard = () => {
  const initialRow = ShuffleArray([...Array(9)].map((_, i) => i + 1));
  const board = [initialRow];
  for (let i = 0; i < initialRow.length - 1; i++) {
    let offset = (i + 1) % 3 > 0 ? 3 : 1;
    board.push(RotateArray(board[i], offset));
  }
  return board;
};

const tryToMask = (board) => {
  let row = Math.floor(Math.random() * board.length);
  let column = Math.floor(Math.random() * board[row].length);
  if (board[row][column] === null) {
    return tryToMask(board);
  }
  board[row][column] = null;
  return board;
};

const generateBoard = (tries = 0) => {
  if (tries > 9) return false;
  const board = createFilledBoard();
  return CheckBoardValidity(board) ? board : generateBoard(tries + 1);
};

const maskBoard = (board, difficulty) => {
  // Use .slice() as it's the most performant way to copy an array
  // https://jsperf.com/copying-an-array
  let boardToMask = JSON.parse(JSON.stringify(board));
  console.log('BOARD PRE MASK', boardToMask);
  // Here we could do some much harder stuff for a better difficulty setting
  // Generally this involves solving the puzzle and looking at what techniques
  // need to be used to solve it. Read more here:
  // https://puzzling.stackexchange.com/questions/29/what-are-the-criteria-for-determining-the-difficulty-of-sudoku-puzzle
  const digitsToRemove = Math.floor(difficulty * 8);
  console.log('DIGITS TO REMOVE', digitsToRemove);
  for (let i = 0; i < digitsToRemove; i++) {
    console.log('Mask try: ' + i);
    boardToMask = tryToMask(boardToMask);
  }
  console.log('MASKED BOARD', boardToMask);

  return boardToMask;
};

const newPuzzle = (difficulty = 3) => {
  const board = generateBoard();
  const maskedBoard = maskBoard(board, difficulty);

  return {
    difficulty: difficulty,
    solution: board,
    puzzle: maskedBoard,
  };
};

export default { newPuzzle };
