/**
 * @param {number[][]} rectangles
 * @return {number}
 */

var interchangeableRectangles = function (rectangles) {
  const map = {};

  for (const rectangle of rectangles) {
    const width = rectangle[0];
    const height = rectangle[1];

    const ratio = width / height;

    map[ratio] = (map[ratio] || 0) + 1;
  }

  let result = 0;

  for (const key in map) {
    result += (map[key] * (map[key] - 1)) / 2;
  }

  return result;
};
