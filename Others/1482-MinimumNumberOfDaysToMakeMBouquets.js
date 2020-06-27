/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const minDays = (bloomDay, m, k) => {

  if (m * k === bloomDay.length) return Math.max.apply(null, bloomDay);
  if (m * k > bloomDay.length) return -1;

  let left = 1;
  let right = 1e9;
  let middle;
  let bouquet = 0;
  let flowers = 0;

  while (left < right) {
    middle = Math.floor((left + right) / 2);

    for (const day of bloomDay) {

      if (day > middle) {
        flowers = 0;
        continue;
      }

      if (flowers + 1 >= k) {
        bouquet++;
        flowers = 0;
        continue;
      }

      flowers++;

    }

    if (bouquet < m)
      left = middle + 1;
    else
      right = middle;

    bouquet = 0;
    flowers = 0;

  }

  return left;

}

console.log(minDays([1,10,3,10,2], 3, 1));
console.log(minDays([1,10,3,10,2], 3, 2));
console.log(minDays([7,7,7,7,12,7,7], 2, 3));
console.log(minDays([1,10,2,9,3,8,4,7,5,6], 4, 2));
