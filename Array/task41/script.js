console.log(arrayRange(6, 14));
console.log(arrayRange(-6, 4));
function arrayRange(a,b) {
	var arr=[];
	for (var i = Math.min(a,b); i <= Math.max(a,b); i++) {
		arr.push(i);
	}
	return arr;
}
