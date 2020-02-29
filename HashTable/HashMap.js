class MyHashMap {

  put(key, value) {
    this[key] = value;
  }

  get(key) {
    return key in this ? this[key] : -1;
  }

  remove(key) {
    if (key in this)
      delete this[key];
  }

}

Object.setPrototypeOf(MyHashMap.prototype, null);

const hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found)
