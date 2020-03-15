/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {

  const map = new Map();
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (!map.has(nums[i]))
      map.set(nums[i], 1);
    else
      map.set(nums[i], map.get(nums[i]) + 1);
  }

  if (map.size <= k) return [...map.keys()];

  return [...map.entries()]
    .sort(([, val1], [, val2]) => val2 - val1)
    .slice(0, k)
    .map(([k, v]) => k);

}

// console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1,2]
// console.log(topKFrequent([1], 1)); // [1]
