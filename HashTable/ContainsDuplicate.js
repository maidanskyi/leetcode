class MyHashSet {

  add(key) {
    this[key] = null;
  }

  remove(key) {
    if (this.contains(key))
      delete this[key];
  }

  contains(key) {
    return key in this;
  }

}

Object.setPrototypeOf(MyHashSet.prototype, null);

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {

  if (nums.length <= 1)
    return false;

  const hashMap = new MyHashSet();
  for (const num of nums) {
    if (hashMap.contains(num))
      return true;
    hashMap.add(num);
  }
  return false;

}

console.log(containsDuplicate([0]));
