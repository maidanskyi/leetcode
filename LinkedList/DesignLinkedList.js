/**
 * Initialize your data structure here.
 */
class MyLinkedList {

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * Get the value of the index-th node in the linked list.
   * If the index is invalid, return -1.
   * @param {number} index
   * @return {number}
   */
  get(index) {

    if (!this.length || index >= this.length) return -1;

    let start = 0;
    let currNode = this.head;

    while (start !== index) {
      currNode = currNode.next;
      start++;
    }

    return currNode.val;

  }

  /**
   * Add a node of value val before the first element of the linked list. After
   * the insertion, the new node will be the first node of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const node = {
      val,
      next: this.head,
    }
    this.head = node;
    if (!this.length) this.tail = node;
    this.length++;
  }

  /**
   * Append a node of value val to the last element of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {

    this.tail.next = {
      val,
      next: null,
    }

    this.tail = this.tail.next;

    this.length++;
  }

  /**
   * Add a node of value val before the index-th node in the linked list.
   * If index equals to the length of linked list,
   * the node will be appended to the end of linked list.
   * If index is greater than the length, the node will not be inserted.
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {

    if (index > this.length) return;

    if (index === 0) {
      this.head = {
        val,
        next: this.head,
      }
      this.length++;
      if (!this.tail) this.tail = this.head;
      return;
    }

    if (index === this.length) {
      this.tail.next = {
        val,
        next: null,
      }
      this.length++;
      this.tail = this.tail.next;
      return;
    }

    let currIndex = 0;
    let currNode = this.head;

    while (currIndex + 1 !== index) {
      currNode = currNode.next;
      currIndex++;
    }

    currNode.next = {
      val,
      next: currNode.next,
    }
    this.length++;

  }

  /**
   * Delete the index-th node in the linked list, if the index is valid.
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (!this.length || index >= this.length) return;

    // delete head
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let currNode = this.head;
    let currIndex = 0;

    while (currIndex + 1 !== index) {
      currNode = currNode.next;
      currIndex++;
    }

    currNode.next = currNode.next.next;
    this.length--;

    if (index === this.length)
      this.tail = currNode;

  }

}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const list = new MyLinkedList();

// case 1
// list.addAtHead(7);
// list.addAtHead(2);
// list.addAtHead(1);
// list.addAtIndex(3, 0);
// list.deleteAtIndex(2);
// list.addAtHead(6);
// list.addAtTail(4);
// console.log(list.get(4));
// list.addAtHead(4);
// list.addAtIndex(5, 0);
// list.addAtHead(6);

// case 2
// list.addAtIndex(0, 10);
// list.addAtIndex(0, 20);
// list.addAtIndex(0, 30);
// console.log(list.get(0));

