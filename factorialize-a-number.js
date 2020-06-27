let arr  = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]];
let ne = [];
for (let i=0; i<arr.length; i++){
	let max = arr[i][0]
	for (let j=1; j<arr[i].length; j++){
		if (max<arr[i][j]){
			max = arr[i][j];
		}
	}
ne.push(max);
}

console.log(ne);