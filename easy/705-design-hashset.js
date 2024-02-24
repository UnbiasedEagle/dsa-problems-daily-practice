var MyHashSet = function () {
  this.size = 10 ** 6;
  this.hashSet = Array.from({ length: this.size });
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const idx = key % this.size;

  if (this.contains(key)) return;

  if (!this.hashSet[idx]) {
    this.hashSet[idx] = [];
  }
  this.hashSet[idx].push(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const idx = key % this.size;

  if (!this.hashSet[idx]) return;

  const idxToRemove = this.hashSet[idx].indexOf(key);

  if (idxToRemove === -1) return;

  this.hashSet[idx].splice(idxToRemove, 1);
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const idx = key % this.size;

  if (!this.hashSet[idx]) return false;

  return this.hashSet[idx].includes(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
