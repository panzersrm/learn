class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method 
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }
  // Only change code below this line
  intersection(set){
    const newSet = new Set();
    set.values().map(el => this.has(el) ? newSet.add(el) : false);
    return newSet;
  }

  difference(set){
    const newSet = new Set();
    const inter = this.intersection(set);
    this.values().map(el => !inter.has(el) ? newSet.add(el) : false);
    return newSet;
  }

  isSubsetOf(set){
    let newSet = this.intersection(set);
    let result =  [];
    this.values().map(el => newSet.has(el) ? false : result.push(1));
    return result.length===0;
  }
  // Only change code above this line
}



let sa = new Set();

sa.dictionary = {a: true, b: true};

let sb = new Set();

sb.dictionary = {a: true, b: true, d:true, e:true};

console.log(sa.isSubsetOf(sb));