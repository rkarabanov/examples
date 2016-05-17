function fibonacci(num) {
	var arr=[];
	arr[0]=0;
	arr[1]=1;
for (var i = 2; i < num; i++) {
	arr[i]=arr[i-1]+arr[i-2]
}
	return arr;
}
console.log(fibonacci(9));