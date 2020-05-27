/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortArrayByParity = (arr) => {

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {

    if (arr[start] % 2 && arr[end] % 2 === 0) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }

    if (arr[start] % 2 === 0) start++;
    if (arr[end] % 2) end--;

  }

  return arr;

}

console.log(sortArrayByParity([3,1,2,4]));
