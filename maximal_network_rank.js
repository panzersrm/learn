function solution(A, B, N) {
    if(N===2){
      return 1;
    }
    //create an array of roads between cities
    let roads=[];
    for(let i=0; i<A.length; i++){
        roads.push([A[i],B[i]]);
    }
    
    //a function that counts how many roads a city has
    function getOccurrence(array, value) {
        return array.filter(el => (el === value)).length;
    }

    //create an array of roads that doesn't contain the roads of the most connected city
    let firstLessRoads =[];

    //a function that returns the rank of the most connected city(city with most roads)
    function rank(arr){
        //create an array that contains number of roads for each city
        let counts=[];
        for(let i=1; i<=N; i++){
            counts.push(getOccurrence(arr,i));
        }
        //find the maximum number of roads for a city
        let maxx = Math.max(...counts);
        //find the city that has the most roads
        let maxxCity = counts.indexOf(maxx)+1;
        //create an array with the roads of the most connected city
        let firstRoads = roads.filter(el=>el.includes(maxxCity));
        //asign value to the array of roads that doesn't contain the roads of the most connected city
        //basically remove the firstRoads array from the roads array
        firstLessRoads = roads.filter(el=>!firstRoads.includes(el));
        //return the rank of the most connected city
        return firstRoads.length;
    }

  //answer to the problem is found by running the rank() function twice
  //first time on the A+B cities list
  //second time on the A+B-roads of the most connected city 
  return rank(A.concat(B)) + rank(firstLessRoads.flat());

}



console.log(solution([1,2,4,5],[2,3,5,6],6));
//console.log(solution([1,2,3,3,6,6],[2,3,4,5,7,8],8));
//console.log(solution([1],[2],2));
//console.log(solution([1,2,4,5],[2,3,5,6],6));
//console.log(solution([1,2,3,3,5,3,6,7,8,9,10,11,12,13,14,15,16,17,18,20],[2,3,1,4,4,5,17,12,13,11,11,16,19,1,4,7,4,9,1,19],20));
