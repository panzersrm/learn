function sumOf2(arr,n){
for (let i=0;i<arr.length;i++){
	for (let j=arr.length-1;j>=0;j--){
		if (arr[i]+arr[j]==n){
			return arr[i] + " and " + arr[j] + " equal " + n;
		}		
	}
}
return "none 2 of [" + arr +"] equal " + n;
}

console.log(sumOf2([...Array(3050).keys()],6000));