/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {

  const hash = {};
  const stack = [0];

  for (let i = 1; i < nums2.length; i++) {
    if (nums2[i] < nums2[stack[stack.length - 1]]) {
      stack.push(i);
      continue;
    }

    while (nums2[i] > nums2[stack[stack.length - 1]] && stack.length) {
      hash[nums2[stack[stack.length - 1]]] = nums2[i];
      stack.pop();
    }

    stack.push(i);

  }

  return nums1.map(el => hash[el] ? hash[el] : -1);

}

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));
console.log(nextGreaterElement([2,4], [1,2,3,4]));
