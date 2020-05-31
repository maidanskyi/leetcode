/**
 * @param {number[]} nums
 */
class Solution {

  constructor(arr) {
    this.original = arr;
    this.arr = [...arr];
  }

  /**
   * Resets the array to its original configuration and return it.
   * @return {number[]}
   */
  reset() {
    this.arr = [...this.original];
    return this.arr;
  }

  /**
   * Returns a random shuffling of the array.
   * @return {number[]}
   */
  shuffle() {
    this.reset();
    for (let i = 0; i < this.arr.length; i++) this.swap(i, this.getRandomInt());
    return this.arr;
  }

  swap(i, j) {
    const temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }

  getRandomInt() {
    return Math.floor(Math.random() * this.arr.length);
  }

}

// Your Solution object will be instantiated and called as such:
const obj = new Solution([1,2,3,4,5]);
const aa = obj.shuffle();
const bb = obj.reset();
const cc = obj.shuffle();
