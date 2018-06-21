const SolvePuzzle = (board) => {
  // Not implemented
};

const CheckBoardValidity = (board) => {
  // Row
  board.forEach((row, rowIndex) => {
    // Use set to remove duplicates and check for size
    if ([...new Set(row)].length !== 9) return false;
  });

  // Column
  for (let i = 0; i < board.length; i++) {
    let column = board.map((row) => row[i]);
    if ([...new Set(column)].length !== 9) return false;
  }

  // Group to be added
  return true;
};

export { CheckBoardValidity, SolvePuzzle };
