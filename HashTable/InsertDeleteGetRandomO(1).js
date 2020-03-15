/**
 * Initialize your data structure here.
 */
class RandomizedSet {

  constructor() {
    this.map = Object.create(null);
    this.values = [];
  }

  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element.
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.map[val] !== undefined)
      return false;

    this.map[val] = this.values.length;
    this.values.push(val);

    return true;
  }

  /**
   * Removes a value from the set. Returns true if the set contained the specified element.
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (this.map[val] === undefined)
      return false;

    const el_index = this.map[val];

    if (el_index === this.values.length - 1) {
      this.values.pop();
      return delete this.map[val];
    }

    const last_in_values = this.values.pop();
    this.values[el_index] = last_in_values;
    this.map[last_in_values] = el_index;
    return delete this.map[val];

  }

  /**
   * Get a random element from the set.
   * @return {number}
   */
  getRandom() {
    if (this.values.length === 0) return -1;
    if (this.values.length === 1) return this.values[0];
    return this.values[Math.floor(Math.random()*this.values.length)];
  }

}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// Init an empty set.
const randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log(randomSet.insert(1));

// Returns false as 2 does not exist in the set.
console.log(randomSet.remove(2));

// Inserts 2 to the set, returns true. Set now contains [1,2].
console.log(randomSet.insert(2));

// getRandom should return either 1 or 2 randomly.
console.log(randomSet.getRandom());

// Removes 1 from the set, returns true. Set now contains [2].
console.log(randomSet.remove(1));

// 2 was already in the set, so return false.
console.log(randomSet.insert(2));

// Since 2 is the only number in the set, getRandom always return 2.
console.log(randomSet.getRandom());
