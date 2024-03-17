/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let current = init;
  const initial = init;

  const reset = () => {
    current = initial;
    return current;
  };

  const increment = () => {
    current++;
    return current;
  };

  const decrement = () => {
    current--;
    return current;
  };

  return {
    increment,
    decrement,
    reset,
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
