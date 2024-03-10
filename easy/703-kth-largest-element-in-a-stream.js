/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.priorityQueue = new MinPriorityQueue();

  nums.forEach((num) => this.add(num));
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.priorityQueue.enqueue(val);

  if (this.priorityQueue.size() > this.k) {
    this.priorityQueue.dequeue();
  }

  return this.priorityQueue.front().element;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
