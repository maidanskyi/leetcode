/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = candyType => {
  const set = new Set();
  let count = 0;

  candyType.forEach(el => {
    if (set.has(el)) return;

    set.add(el);
    count++;
  });

  const upperBound = candyType.length / 2;

  return upperBound >= count ? count : upperBound;
}

console.log(distributeCandies([1,1,2,2,3,3])); // 3
console.log(distributeCandies([1,1,2,3])); // 2
console.log(distributeCandies([6,6,6,6])); // 1
