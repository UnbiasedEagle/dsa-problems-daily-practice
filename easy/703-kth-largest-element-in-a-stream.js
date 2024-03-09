/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.priorityQueue = new MinPriorityQueue();

  nums.forEach((num) => {
    if (this.priorityQueue.size() < k) {
      this.priorityQueue.enqueue(num);
    } else {
      this.priorityQueue.dequeue();
      this.priorityQueue.enqueue(num);
    }
  });
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.priorityQueue.size() < this.k) {
    this.priorityQueue.enqueue(val);
  } else {
    this.priorityQueue.dequeue();
    this.priorityQueue.enqueue(val);
  }
  return this.priorityQueue.front();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
