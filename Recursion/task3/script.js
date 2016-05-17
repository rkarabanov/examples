function range(num1,num2) {
	var arr=[];
	for (var i = num1+1; i < num2; i++) {
		arr.push(i);
	}
	return arr;
}
console.log(range(2, 9));