/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findLeastNumOfUniqueInts = (arr, k) => {

  if (arr.length === k) return 0;

  const map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
      continue;
    }

    map[arr[i]] = 1;

  }

  const elementsCount = [...Object.values(map)].sort((a, b) => b - a);

  if (arr.length === 0) return elementsCount.length;

  while (k > 0) {

    if (k < elementsCount[elementsCount.length - 1]) break;

    k -= elementsCount[elementsCount.length - 1];
    elementsCount.length--;
  }

  return elementsCount.length;

}

console.log(findLeastNumOfUniqueInts([5,5,4], 1)); // 1
console.log(findLeastNumOfUniqueInts([4,3,1,1,3,3,2], 3)); // 2
