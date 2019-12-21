class Queue {

  constructor() {
    this.queue = [];
    this.head = -1;
    this.tail = -1;
  }

  enqueue(value) {
    if (this.isEmpty()) {
      this.queue.push(value);
      this.head = this.tail = 0;
      return true;
    }

    this.tail += 1
    this.queue[this.tail] = value
    return true
  }

  dequeue() {
    if (this.head === -1) {
      // empty queue
      return false
    } else if (this.head === this.tail) {
      // one item in queue
      const value = this.queue[this.head];
      this.head = this.tail = -1
      return value;
    } else {
      // > 1 item in queue
      const value = this.queue[this.head];
      this.head += 1;
      return value;
    }
  }

  isEmpty() {
    return this.head === -1 && this.tail === -1;
  }

}

var openLock = (deadends, target) => {
  if (target === '0000') {
    return 0;
  }

  const excludedNodes = new Set(deadends);
  if (excludedNodes.has('0000')) {
    return -1;
  }

  const queue = new Queue();
  queue.enqueue('0000');
  const visitedNodes = new Map([['0000', 0]]);

  theEnd: while (!queue.isEmpty()) {

    const elFromQueue = queue.dequeue();
    const splited = elFromQueue.split('');
    for (let i = 0; i < splited.length; i++) {
      const copy = splited.slice();
      const number = Number(copy[i]);

      copy[i] = number - 1 === -1 ? 9 : number - 1;
      const lessNode = copy.join('');
      if (lessNode === target) {
        visitedNodes.set(lessNode, visitedNodes.get(elFromQueue) + 1);
        break theEnd;
      }
      if (!excludedNodes.has(lessNode) && !visitedNodes.has(lessNode)) {
        visitedNodes.set(lessNode, visitedNodes.get(elFromQueue) + 1);
        queue.enqueue(lessNode);
      };


      copy[i] = number + 1 === 10 ? 0: number + 1;
      const moreNode = copy.join('');
      if (moreNode === target) {
        visitedNodes.set(moreNode, visitedNodes.get(elFromQueue) + 1);
        break theEnd;
      }
      if (!excludedNodes.has(moreNode) && !visitedNodes.has(moreNode)) {
        visitedNodes.set(moreNode, visitedNodes.get(elFromQueue) + 1);
        queue.enqueue(moreNode);
      };
    }

  }
  const steps = visitedNodes.get(target);

  return steps ? steps : -1;
};
