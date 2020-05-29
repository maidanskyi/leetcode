/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {

  const resposne = [];

  for (let i = 0; i < nums.length; i++) {
    let val = Math.abs(nums[i]) - 1;
    if(nums[val] > 0) {
      nums[val] = -nums[val];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) resposne.push(i + 1);
  }

  return resposne;

}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
