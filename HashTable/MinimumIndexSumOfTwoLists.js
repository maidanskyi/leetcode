const arrayIntersection = (nums1, nums2) => {
  if (!nums1.length || !nums2.length) return [];
  const setNum = new Set(nums1);
  const response = [];
  for (const key of setNum.values()) {
    if (nums2.indexOf(key) !== -1)
      response.push(key);
  }
  return response;
}

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = (list1, list2) => {

  const map = arrayIntersection(list1, list2).reduce((acc, curr) => {
    const index = list1.indexOf(curr) + list2.indexOf(curr);
    if (acc.has(index)) {
      const arr = acc.get(index);
      arr.push(curr);
    } else {
      acc.set(index, [curr]);
    }
    return acc;
  }, new Map());

  return map.get(Math.min(...map.keys()));

}

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
  )
);
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  )
);
