/**
 * Initialize your data structure here.
 */
class MyStack {

  constructor() {
    this.queue = [];
    this.stack = [];
  }

  /**
   * Push element x onto stack.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.queue.push(x);
  }

  /**
   * Removes the element on top of the stack and returns that element.
   * @return {number}
   */
  pop() {
    if (this.queue.length)
      this.moveFromQueueToStack();

    return this.stack.pop();
  }

  /**
   * Get the top element.
   * @return {number}
   */
  top() {
    if (this.queue.length)
      return this.queue[this.queue.length - 1]
    return this.stack[this.stack.length - 1];
  }

  /**
   * Returns whether the stack is empty.
   * @return {boolean}
   */
  empty() {
    return !(this.queue.length + this.stack.length)
  }

  /**
   * Moves all elements from queue to stack.
   * @return {void}
   */
  moveFromQueueToStack() {
    const length = this.queue.length;
    for (let i = 0; i < length; i++) {
      this.stack.push(this.queue[i]);
    }
    this.queue.length = 0;
  }

}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const stack = new MyStack();

stack.push(1);
stack.push(2);
stack.top();   // returns 2
stack.pop();   // returns 2
stack.empty(); // returns false
