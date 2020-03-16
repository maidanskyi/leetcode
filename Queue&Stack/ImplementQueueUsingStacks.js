/**
 * Initialize your data structure here.
 */
class MyQueue {

  constructor() {
    this.stack = [];
    this.readStack = [];
  }

  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.push(x);
  }

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    if (!this.readStack.length && this.stack.length) {
      this.moveElements();
    }

    return this.readStack.pop();
  }

  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    if (!this.readStack.length && this.stack.length) {
      this.moveElements();
    }

    return this.readStack[this.readStack.length - 1];
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return !(this.stack.length + this.readStack.length);
  }

  /**
   * Moves elements from stack to queue
   * @return {void}
   */
  moveElements() {
    while (this.stack.length) {
      this.readStack.push(this.stack.pop());
    }
  }

}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
const queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
