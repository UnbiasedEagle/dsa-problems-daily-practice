var promisePool = async function (functions, n) {
  const waitingPromises = [];

  const wrapperFunctions = functions.map((fn) => {
    return async () => {
      await fn();
      const next = waitingPromises.shift();
      if (next) {
        await next();
      }
    };
  });

  const currentlyRunning = wrapperFunctions.slice(0, n);
  waitingPromises.push(...wrapperFunctions.slice(n));

  return Promise.all(currentlyRunning.map((fn) => fn()));
};
