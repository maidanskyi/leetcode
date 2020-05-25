// Priority Queue
class MaxHeap {
  constructor(arr = []) {
    this.heap = [null];
    for (const el of arr) this.insert(el);
  }

  insert(el) {
    this.heap.push(el);
    this.swim(this.heap.length - 1);
  }

  swim(k) {
    while (k > 1 && this.less(Math.floor(k / 2), k)) {
      this.exchange(Math.floor(k / 2), k);
      k = Math.floor(k / 2);
    }
  }

  sink(k) {
    while (2 * k <= this.heap.length - 1) {
      let i = 2 * k;
      if (i < this.heap.length - 1 && this.less(i, i + 1)) i++;
      if (!this.less(k, i)) break;

      this.exchange(i, k);
      k = i;
    }
  }

  less(i, j) {
    return this.heap[i] < this.heap[j];
  }

  deleteMax() {
    const maxValue = this.heap[1];
    this.exchange(1, this.heap.length - 1);
    this.heap.length = this.heap.length - 1;
    this.sink(1);
    return maxValue;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  exchange(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {

  const heap = new MaxHeap(nums);

  let response;

  for (let i = 0; i < k; i++) response = heap.deleteMax();

  return response;

}

//console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4
