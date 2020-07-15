function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  function ownProp(obj){
    let ownProp = [];
  for (let prop in obj){
    if(obj.hasOwnProperty(prop)){
      ownProp.push(prop);
    }
  }
  return ownProp;
  }

  for (let i=0;i<collection.length;i++){
    for (let j=0;j<ownProp(source).length;j++){
      if (ownProp(source).length==1) {
        if(collection[i].hasOwnProperty(ownProp(source)[j]) && collection[i][ownProp(source)[j]]===source[ownProp(source)[j]]){
        arr.push(collection[i]);
      }
      } else {
      if(collection[i].hasOwnProperty(ownProp(source)[j]) && collection[i].hasOwnProperty(ownProp(source)[j+1]) && collection[i][ownProp(source)[j]]===source[ownProp(source)[j]] && collection[i][ownProp(source)[j+1]]===source[ownProp(source)[j+1]]) {
        arr.push(collection[i]);
      }
    }
    }
  }
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
