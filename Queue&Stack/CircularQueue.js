/**
 Your implementation should support following operations:

 MyCircularQueue(k): Constructor, set the size of the queue to be k.
 Front: Get the front item from the queue. If the queue is empty, return -1.
 Rear: Get the last item from the queue. If the queue is empty, return -1.
 enQueue(value): Insert an element into the circular queue. Return true if the operation is successful.
 deQueue(): Delete an element from the circular queue. Return true if the operation is successful.
 isEmpty(): Checks whether the circular queue is empty or not.
 isFull(): Checks whether the circular queue is full or not.
 */
class MyCircularQueue {

  constructor(size) {
    this.size = size
    this.queue = new Array(size)
    this.head = -1
    this.tail = -1
  }

  enQueue(value) {

    if (this.isEmpty()) {
      this.head = this.tail = 0
      this.queue[this.tail] = value
      return true
    }

    if (this.isFull())
      return false

    this.tail = (this.tail + 1) % this.size
    this.queue[this.tail] = value
    return true

  }

  deQueue() {
    if (this.head === -1) {
      // empty queue
      return false
    } else if (this.head === this.tail) {
      // one item in queue
      delete this.queue[this.head]
      this.head = this.tail = -1
      return true
    } else {
      // > 1 item in queue
      delete this.queue[this.head]
      this.head = (this.head + 1) % this.size
      return true
    }
  }

  Front() {
    return this.head === -1 ? this.head : this.queue[this.head]
  }

  Rear() {
    return this.tail === -1 ? this.tail : this.queue[this.tail]
  }

  isEmpty() {
    return this.head === -1 && this.tail === -1
  }

  isFull() {
    return (this.tail + 1) % this.size === this.head
  }

}
