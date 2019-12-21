class MinStack {

  constructor() {
    this.stack = [];
    this.min = null;
  }

  push(x) {
    this.stack.push(x);
  };

  pop() {
    this.stack.pop();
  };

  top() {
    return this.stack.length ? this.stack[this.stack.length - 1].value : undefined;
  };

  getMin() {
    return this.min;
  };

}
