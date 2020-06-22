/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {

  const map = {};

  for (const num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
  }

  const [key] = Object.entries(map).find(([key, value]) => value === 1);

  return Number(key);

}

console.log(singleNumber([2,2,3,2])); // 3
console.log(singleNumber([0,1,0,1,0,1,99])); // 99
