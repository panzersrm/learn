function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.push = (el) => collection.push(el);
  this.pop = () => collection.pop();
  this.peek = () => collection[collection.length-1];
  this.isEmpty = () => collection.length===0 ? true : false;
  this.clear = () => collection = [];
}
