/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const maxHeap = new MaxPriorityQueue();

  for (const stone of stones) {
    maxHeap.enqueue(stone);
  }

  while (maxHeap.size() > 1) {
    const stone1 = maxHeap.dequeue().element;
    const stone2 = maxHeap.dequeue().element;

    if (stone1 !== stone2) {
      maxHeap.enqueue(Math.abs(stone1 - stone2));
    }
  }

  return maxHeap.front()?.element || 0;
};
