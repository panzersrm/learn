function quickSort(array) {
    if(array.length===0){
      return [];
    } else {
      let less=[];
      let more=[];
      let eq=[];
      for (let i of array){
        if(i<array[0]){
          less.push(i);
        } else if(i>array[0]) {
          more.push(i);
        } else {
          eq.push(i);
        }
      }
      return [...quickSort(less), ...eq, ...quickSort(more)];
    }
}


console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))