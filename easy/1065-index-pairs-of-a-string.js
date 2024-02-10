var indexPairs = function (str, words) {
  const result = [];

  for (const word of words) {
    let start = 0;

    while (str.indexOf(word, start) !== -1) {
      const idx = str.indexOf(word, start);
      result.push([idx, idx + word.length - 1]);
      start = idx + word.length;
    }
  }

  result.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
};
