import { ShuffleArray, RotateArray } from '../helpers/util';
import Solver from './sudoku-solver';

const fillBoard = () => {
  const initialRow = ShuffleArray([...Array(9)].map((_, i) => i + 1));
  const board = [initialRow];
  for (let i = 0; i < initialRow.length - 1; i++) {
    const offset = (i + 1) % 3 > 0 ? 3 : 1;
    board.push(RotateArray(board[i], offset));
  }
  return board;
};

const generateBoard = (tries = 0, maximumTries = 9) => {
  if (tries > maximumTries) return false;
  const board = fillBoard();
  return Solver.CheckBoardValidity(board)
    ? board
    : generateBoard(tries + 1, maximumTries);
};

const tryToMask = (board) => {
  const row = Math.floor(Math.random() * board.length);
  const column = Math.floor(Math.random() * board[row].length);
  if (board[row][column] === null) {
    return tryToMask(board);
  }
  board[row][column] = null;
  return board;
};

const maskBoard = (board, difficulty) => {
  // Use .slice() as it's the most performant way to copy an array
  // https://jsperf.com/copying-an-array
  let boardToMask = JSON.parse(JSON.stringify(board));
  // Here we could do some much harder stuff for a better difficulty setting
  // Generally this involves solving the puzzle and looking at what techniques
  // need to be used to solve it. Read more here:
  // https://puzzling.stackexchange.com/questions/29/what-are-the-criteria-for-determining-the-difficulty-of-sudoku-puzzle
  const digitsToRemove = Math.floor(difficulty * 8);
  for (let i = 0; i < digitsToRemove; i++) {
    boardToMask = tryToMask(boardToMask);
  }

  return boardToMask;
};

export default { generateBoard, maskBoard };
