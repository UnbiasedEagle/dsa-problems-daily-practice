var throttle = function (fn, t) {
  let isExecuting = false;
  let nextArgs;

  return function wrapper(...args) {
    if (isExecuting) {
      nextArgs = args;
    } else {
      fn(...args);
      isExecuting = true;
      setTimeout(helper, t);
    }

    function helper() {
      if (nextArgs) {
        fn(...nextArgs);
        nextArgs = null;
        isExecuting = true;
        setTimeout(helper, t);
      } else {
        isExecuting = false;
      }
    }
  };
};
