var TimeLimitedCache = function () {
  this.cache = {};
  this.timerIds = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  if (this.cache.hasOwnProperty(key)) {
    this.cache[key] = value;

    if (this.timerIds.hasOwnProperty(key)) {
      clearTimeout(this.timerIds[key]);
      delete this.timerIds[key];
    }

    this.timerIds[key] = setTimeout(() => {
      delete this.cache[key];
    }, duration);

    return true;
  }

  this.cache[key] = value;

  if (this.timerIds.hasOwnProperty(key)) {
    clearTimeout(this.timerIds[key]);
    delete this.timerIds[key];
  }

  this.timerIds[key] = setTimeout(() => {
    delete this.cache[key];
  }, duration);

  return false;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.hasOwnProperty(key)) {
    return this.cache[key];
  }

  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.cache).length;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
