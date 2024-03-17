/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.arr = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  let result = 0;

  for (const item of this.arr) {
    for (const num of item) {
      result += num;
    }
  }

  return result;
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return '[' + this.arr.join() + ']';
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
