// this function is from MDN
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @param {number[]} arr
 */
class Solution {

  constructor(arr) {
    let sum = -1;
    this.arr = arr.map(el => {
      sum += el;
      return sum;
    });
  }

  /**
   * @return {number}
   */
  pickIndex() {

    let target = getRandomIntInclusive(0, this.arr[this.arr.length - 1]);
    let start = 0;
    let end = this.arr.length;
    let middle;

    while (start < end) {
      middle = Math.floor((start + end) / 2);

      if (middle === start && target <= this.arr[middle]) return middle;

      if (
        target > this.arr[middle - 1] && target <= this.arr[middle]
      ) return middle;

      if (target <= this.arr[middle])
        end = middle;
      else
        start = middle + 1;

    }

  }

}

const obj = new Solution([1,3]);
console.log(obj.pickIndex());
console.log(obj.pickIndex());
console.log(obj.pickIndex());
console.log(obj.pickIndex());

