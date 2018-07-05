const CheckBoardValidity = (board) => {
  // Row
  // Use set to remove duplicates and check for size
  // This should never fail providing we use the current set of rules for
  // generating a board as it wouldn't be possible for a row to contain duplicates.
  // Keeping this for future changes.
  board.forEach((row) => [...new Set(row)].length === 9);

  // Column
  for (let i = 0; i < board.length; i++) {
    const column = board.map((row) => row[i]);
    if ([...new Set(column)].length !== 9) return false;
  }

  // Group to be added
  return true;
};

export default { CheckBoardValidity };
