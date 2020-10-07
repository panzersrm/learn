function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  this.enqueue = function(el){
    if(this.isEmpty()){
      this.collection.push(el);
    } else {
      for(let i=0; i<this.collection.length; i++){
        if (el[1]<this.collection[i][1]){
          this.collection.splice(i,0,el);
          break;
        } else {
          this.collection.push(el);
          break;
        }
      }
    }
  }
  this.dequeue = function(){
    return this.collection.shift()[0];
  }
  this.size = () => this.collection.length;
  this.front = () => this.collection[0][0];
  this.isEmpty = () => this.size()===0 ? true : false;
}


let bull = new PriorityQueue();
bull.collection = [['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]];
bull.enqueue(["god",5]);
bull.printCollection();
