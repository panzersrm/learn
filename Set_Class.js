class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line
  add(item) {
    if (this.values().indexOf(item)>-1){
      return false;
    } else {
      this.dictionary[this.length] = item;
      this.length++;
      return true;
    }
  }
  remove(item) {
    if (this.values().indexOf(item)==-1){
      return false;
    } else {
      delete this.dictionary[this.values().indexOf(item)];
      return true;
    }
  }
  size(){
    return this.values().length;
  }
  // Only change code above this line
}
