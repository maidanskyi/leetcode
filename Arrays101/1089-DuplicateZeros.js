/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = (arr) => {

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] !== 0) continue;

    for (let j = arr.length - 1; j > i; j--) {
      arr[j] = arr[j - 1];
    }

    if (arr.length - 1 > i) {
      arr[i + 1] = 0;
      i++;
    }

  }

}

const arr = [1,0,2,3,0,4,5,0];
duplicateZeros(arr);
console.log(arr); // [1,0,0,2,3,0,0,4]

const arr2 = [1,2,3];
duplicateZeros(arr2);
console.log(arr2); // [1,2,3]
