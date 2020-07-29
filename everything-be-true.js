function truthCheck(collection, pre) {
  let res = collection.map(el=>Boolean(el[pre]));
  return res.every(el=>el);
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));


function addTogether() {
  
  function sumTwoAnd(el){
    return el+2;
  }

               
        
        return Object.values(arguments);
  

             }

             console.log(addTogether(2,"4"))