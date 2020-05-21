/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {

  if (!nums.length) return [];
  if (nums.length === 1) return [nums];

  const response = [];
  const usedIndex = new Set();
  const usedKeys = new Set();
  const backtrack = (arr = []) => {

    for (let i  = 0; i < nums.length; i++) {
      if (usedIndex.has(i)) continue;
      usedIndex.add(i);
      arr.push(nums[i]);
      if (arr.length === nums.length) {
        if (!usedKeys.has(arr.join(''))) {
          usedKeys.add(arr.join(''));
          response.push([...arr]);
        }
      } else
        backtrack(arr);
      usedIndex.delete(i);
      arr.pop();
    }

  }

  backtrack();

  return response;

}

console.log(permuteUnique([1,1,2]));
