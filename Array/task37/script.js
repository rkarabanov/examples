console.log(arrayFilled(6, 'default value'));
console.log(arrayFilled(2, 'password'));
function arrayFilled(n,char) {
	var arr=[n];
	for (var i = 0; i < n; i++) {
		arr[i]=char;
	}
	return arr;
}