var MyHashMap = function () {
  this.size = 10 ** 6;
  this.hashMap = Array.from({ length: this.size });
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const node = this.getNode(key);

  if (node) {
    node.value = value;
    return;
  }

  const idx = key % this.size;

  if (!this.hashMap[idx]) {
    this.hashMap[idx] = [];
  }

  this.hashMap[idx].push({ key, value });
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const node = this.getNode(key);

  if (!node) return -1;

  return node.value;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const node = this.getNode(key);

  if (!node) return;

  const idx = key % this.size;

  const idxToRemove = this.hashMap[idx].indexOf(node);

  this.hashMap[idx].splice(idxToRemove, 1);
};

MyHashMap.prototype.getNode = function (key) {
  const idx = key % this.size;

  if (!this.hashMap[idx]) return false;

  const node = this.hashMap[idx].find((node) => node.key === key);

  return node;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
