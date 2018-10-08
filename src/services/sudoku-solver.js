const CheckBoardValidity = (board) => {
  return rowsAreValid(board) && columnsAreValid(board) && groupsAreValid(board);
};

const rowsAreValid = (board) => {
  for (let i = 0; i < board.length; i++) {
    if ([...new Set(board[i])].length !== 9) return false;
  }
  return true;
};

const columnsAreValid = (board) => {
  for (let i = 0; i < board.length; i++) {
    const column = board.map((row) => row[i]);
    if ([...new Set(column)].length !== 9) return false;
  }
  return true;
};

const groupsAreValid = (board) => {
  const groupRows = [[[], [], []], [[], [], []], [[], [], []]];
  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const groupY = Math.floor(rowIndex / 3);
      const groupX = Math.floor(colIndex / 3);
      groupRows[groupX][groupY].push(col);
    });
  });
  try {
    groupRows.forEach((row) => {
      row.forEach((group) => {
        const set = [...new Set(group)];
        if (set.length !== 9) throw 'Invalid';
      });
    });
  } catch (e) {
    return false;
  }

  return true;
};

export default { CheckBoardValidity };
