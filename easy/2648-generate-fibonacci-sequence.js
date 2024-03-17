/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let count = 0;
  let prev = 0;
  let current = 1;

  if (count === 0) {
    count++;
    yield 0;
  }
  if (count === 1) {
    count++;
    yield 1;
  }
  while (true) {
    const result = prev + current;
    prev = current;
    current = result;

    yield result;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
