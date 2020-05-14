/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {

  if (!nums.length) return [];
  if (nums.length === 1) return [nums];

  const response = [];
  const set = new Set();
  const backtrack = (arr = []) => {

    for (let i = 0; i < nums.length; i++) {
      if (set.has(i)) continue;
      set.add(i);
      arr.push(nums[i]);
      if (set.size === nums.length)
        response.push([...arr]);
      else
        backtrack(arr);
      set.delete(i);
      arr.pop();
    }

  }

  backtrack();

  return response;

}

/**
 * Returns
 [
   [1,2,3],
   [1,3,2],
   [2,1,3],
   [2,3,1],
   [3,1,2],
   [3,2,1]
 ]
*/
console.log(permute([1,2,3]));
