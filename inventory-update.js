function updateInventory(arr1, arr2) {
    if(arr1.length===0){
        return arr2.sort((a,b)=>a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1);
    }
    
    for (let i=0;i<arr2.length;i++){
        for (let j=0;j<arr1.length;j++){        
            if(arr2[i][1]===arr1[j][1]){
                arr1[j][0]+=arr2[i][0];
            }  
        }
        if(arr1.every(el=>el[1]!==arr2[i][1])){
                arr1.push(arr2[i]);
        }
    }

    
    return arr1.sort((a,b)=>a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1);
} 

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
console.log([].length)
console.log(updateInventory(curInv, newInv));

