/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let result = '';

  while (columnNumber > 0) {
    const charCode = ((columnNumber - 1) % 26) + 65;

    result = String.fromCharCode(charCode) + result;

    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  return result;
};
