const CheckBoardValidity = (board) => {
  try {
    checkRowsValidity(board);
    checkColumnsValidity(board);
    checkGroupsValidity(board);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const checkRowsValidity = (board) => {
  for (let i = 0; i < board.length; i++) {
    if ([...new Set(board[i])].length !== 9) throw 'There are invalid rows!';
  }
};

const checkColumnsValidity = (board) => {
  for (let i = 0; i < board.length; i++) {
    const column = board.map((row) => row[i]);
    if ([...new Set(column)].length !== 9) throw 'There are invalid columns!';
  }
};

const checkGroupsValidity = (board) => {
  const groupRows = [[[], [], []], [[], [], []], [[], [], []]];
  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const groupY = Math.floor(rowIndex / 3);
      const groupX = Math.floor(colIndex / 3);
      groupRows[groupX][groupY].push(col);
    });
  });
  groupRows.forEach((row) => {
    row.forEach((group) => {
      const set = [...new Set(group)];
      if (set.length !== 9) throw 'There are invalid groups!';
    });
  });
};

export default { CheckBoardValidity };
