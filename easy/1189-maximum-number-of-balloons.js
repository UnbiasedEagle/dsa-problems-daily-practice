/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const balloonMap = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1,
  };

  const textMap = {};

  for (const char of text) {
    textMap[char] = (textMap[char] || 0) + 1;
  }

  let result = text.length;

  for (const key in balloonMap) {
    if (!textMap[key]) return 0;

    const count = Math.floor(textMap[key] / balloonMap[key]);

    result = Math.min(result, count);
  }

  return result;
};
