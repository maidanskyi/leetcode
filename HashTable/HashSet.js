class MyHashSet {

  constructor() {
    this.dataSet = Object.create(null);
  }

  add(key) {
    this.dataSet[key] = null;
  }

  remove(key) {
    if (this.contains(key))
      delete this.dataSet[key];
  }

  contains(key) {
    return key in this.dataSet;
  }

}

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
