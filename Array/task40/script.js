console.log(arrayRange(6, 4));
console.log(arrayRange(-6, 4));
function arrayRange(n,length) {
	var arr=[length];
	for (var i = 0; i < length; i++) {
		arr[i]=n+i;
	}
	return arr;
}
