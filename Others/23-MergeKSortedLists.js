class MinHeap {

  constructor(arr = []) {
    this.heap = [null];
    for (const el of arr) this.insert(el);
  }

  insert(el) {
    this.heap.push(el);
    this.swim(this.heap.length - 1);
  }

  swim(k) {
    while (k > 1 && this.less(k, Math.floor(k / 2))) {
      this.exchange(k, Math.floor(k / 2));
      k = Math.floor(k / 2);
    }
  }

  sink(k) {
    while (2 * k <= this.heap.length - 1) {
      let i = 2 * k;
      if (i < this.heap.length - 1 && this.less(i + 1, i)) i++;
      if (!this.less(i, k)) break;

      this.exchange(k, i);
      k = i;
    }
  }

  less(i, j) {
    return this.heap[i].val < this.heap[j].val;
  }

  deleteMin() {
    const minValue = this.heap[1];
    this.exchange(1, this.heap.length - 1);
    this.heap.length = this.heap.length - 1;
    this.sink(1);
    return minValue;
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
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {

  const minHeap = new MinHeap();

  for (let head of lists) {
    while (head) {
      minHeap.insert(head);
      head = head.next;
    }
  }

  let head = null;
  let currNode = null;

  while (minHeap.size() > 1) {
    if (head === null) {
      head = minHeap.deleteMin();
      currNode = head;
    } else {
      currNode.next = minHeap.deleteMin();
      currNode = currNode.next;
    }
  }

  if (currNode) currNode.next = null;

  return head;

}

console.log(JSON.stringify(
  mergeKLists([
    {
      val: 1,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
    {
      val: 1,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null,
        },
      },
    },
    {
      val: 2,
      next: {
        val: 6,
        next: null,
      },
    },
  ])
)); // 1->1->2->3->4->4->5->6

console.log(JSON.stringify(
  mergeKLists([
    {
      val: -2,
      next: {
        val: -1,
        next: {
          val: -1,
          next: {
            val: -1,
            next: null,
          },
        },
      },
    },
    null,
  ])
)); // 1->1->2->3->4->4->5->6

console.log(JSON.stringify(
  mergeKLists([])
));

console.log(JSON.stringify(
  mergeKLists([null, null, {val: 1, next: null}])
));
