function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.enqueue = (el) => collection.push(el);
  this.dequeue = () => collection.shift();
  this.front = () => collection[0];
  this.size = () => collection.length;
  this.isEmpty = () => collection.length===0 ? true : false;
}