/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = nums => {
  if (nums.length === 1) return nums;

  let splitted = nums.map(el => [el]);

  const merge = (left = [], right = []) => {
    const arr = [];
    let leftCursor = 0;
    let rightCursor = 0;

    while (leftCursor < left.length && rightCursor < right.length) {
      if (left[leftCursor] < right[rightCursor]) {
        arr.push(left[leftCursor]);
        leftCursor += 1;
      } else {
        arr.push(right[rightCursor]);
        rightCursor += 1;
      }
    }

    for (let i = leftCursor; i < left.length; i++) {
      arr.push(left[i])
    }

    for (let i = rightCursor; i < right.length; i++) {
      arr.push(right[i])
    }

    return arr;
  }

  while (splitted.length !== 1) {

    const arr = [];

    for (let i = 0; i < splitted.length; i += 2) {
      arr.push(merge(splitted[i], splitted[i+1]));
    }

    splitted = arr;

  }

  return splitted[0];

};

console.log(sortArray([4, 6, 9, 3, 1, 2, 6, 5, 3, 9, -1, -3434, 0, 100]));
