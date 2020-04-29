/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = isBadVersion => n => {

  const map = new Map();

  let start = 1;
  let end = n - 1;
  let middle;
  let curr;
  let next;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (!map.has(middle))
      map.set(middle, isBadVersion(middle));

    if (!map.has(middle + 1))
      map.set(middle + 1, isBadVersion(middle + 1));

    curr = map.get(middle);
    next = map.get(middle + 1);

    if (!curr && next)
      return middle + 1;

    if (!curr && !curr)
      start = middle + 1;
    else
      end = middle - 1;

  }

  return 1;

}
