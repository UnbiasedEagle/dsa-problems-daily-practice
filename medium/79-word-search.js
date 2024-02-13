/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
  const boardRow = board.length;
  const boardCol = board[0].length;

  function isNotValid(row, col) {
    if (row < 0 || col < 0 || row >= boardRow || col >= boardCol) {
      return true;
    }
    return false;
  }

  function helper(row, col, idx = 0, currentWord = '') {
    if (currentWord === word) return true;

    if (isNotValid(row, col)) {
      return false;
    }

    if (board[row][col] === '-1') return false;

    const char = board[row][col];

    if (word[idx] !== char) return false;

    board[row][col] = '-1';

    const down = helper(row + 1, col, idx + 1, currentWord + char);
    const top = helper(row - 1, col, idx + 1, currentWord + char);
    const left = helper(row, col - 1, idx + 1, currentWord + char);
    const right = helper(row, col + 1, idx + 1, currentWord + char);

    board[row][col] = char;

    return down || top || left || right;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (helper(i, j)) {
        return true;
      }
    }
  }

  return false;
};
