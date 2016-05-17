console.log(arrayFilled(6, 0));
console.log(arrayFilled(4, 11));
function arrayFilled(n,char) {
	var arr=[n];
	for (var i = 0; i < n; i++) {
		arr[i]=char;
	}
	return arr;
}
