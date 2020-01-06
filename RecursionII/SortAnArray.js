/**
 * @param {number[]} nums
 * @return {number[]}
 */
const arr = [4, 6, 9, 3, 1, 2, 6, 5, 3, 9];
const sortArray = nums => {
  if (nums.length === 1) return nums;

  const splitedArray = [];

  // split an array recursively
  const splitArray = arr => {
    if (arr.length === 1) {
      splitedArray.push(arr);
      return;
    }

    const median = Math.ceil(arr.length / 2);

    splitArray(arr.slice(0, median));
    splitArray(arr.slice(median));

  };

  splitArray(nums);
  return splitedArray;

  // // join ana array recursively
  // const mergeArray = arrOfArrs => {
  //
  // };
  //
  // return mergeArray();

};

console.log(sortArray(arr));
