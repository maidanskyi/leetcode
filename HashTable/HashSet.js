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

const obj = new MyHashSet();
obj.contains(1);
obj.contains(2);
obj.add(1);
obj.add(2);
obj.contains(1);
obj.contains(2);
obj.contains(3);
obj.remove(1);
obj.remove(2);
obj.contains(1);
obj.contains(2);
