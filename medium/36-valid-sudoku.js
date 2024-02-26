/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowSet = Array.from({ length: board.length }, (_) => new Set());
  const columnSet = Array.from({ length: board.length }, (_) => new Set());
  const subGridSet = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => new Set())
  );

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === '.') continue;

      if (rowSet[i].has(board[i][j])) return false;
      if (columnSet[j].has(board[i][j])) return false;
      if (subGridSet[Math.floor(i / 3)][Math.floor(j / 3)].has(board[i][j]))
        return false;

      rowSet[i].add(board[i][j]);
      columnSet[j].add(board[i][j]);
      subGridSet[Math.floor(i / 3)][Math.floor(j / 3)].add(board[i][j]);
    }
  }

  return true;
};
