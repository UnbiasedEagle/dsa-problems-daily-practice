/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let smallerWord;
  let biggerWord;

  if (str1.length > str2.length) {
    smallerWord = str2;
    biggerWord = str1;
  } else {
    smallerWord = str1;
    biggerWord = str2;
  }

  let result;
  let currentWord = smallerWord;

  while (currentWord.length > 0) {
    if (
      smallerWord.length % currentWord.length === 0 &&
      biggerWord.length % currentWord.length === 0
    ) {
      const allSameForBiggerWord = biggerWord
        .split(currentWord)
        .every((word) => word === '');
      const allSameSmallerWord = smallerWord
        .split(currentWord)
        .every((word) => word === '');

      if (allSameSmallerWord && allSameForBiggerWord) {
        return currentWord;
      }
    }

    currentWord = currentWord.slice(0, currentWord.length - 1);
  }

  return '';
};
