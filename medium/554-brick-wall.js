/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const cutSumMap = {};

  for (let i = 0; i < wall.length; i++) {
    let cutSum = 0;

    for (let j = 0; j < wall[i].length - 1; j++) {
      cutSum += wall[i][j];
      cutSumMap[cutSum] = (cutSumMap[cutSum] || 0) + 1;
    }
  }

  let maxi = Math.max(0, ...Object.values(cutSumMap));

  return wall.length - maxi;
};
