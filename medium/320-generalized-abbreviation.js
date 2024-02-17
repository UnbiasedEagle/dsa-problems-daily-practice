function generateAbbreviations(word) {
  const result = [];

  function execute(idx = 0, str = '', count = 0) {
    if (idx === word.length) {
      if (count > 0) {
        result.push(str + count.toString());
      } else {
        result.push(str);
      }
      return;
    }

    execute(idx + 1, str, count + 1);
    const newStr = str + (count > 0 ? count.toString() : '') + word[idx];
    execute(idx + 1, newStr, 0);
  }

  execute();

  return result;
}

console.log(generateAbbreviations('word'));
