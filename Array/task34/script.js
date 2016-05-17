console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 5))
function nthlargest(array,num) {
	return array.sort(function (a,b) {
		return a-b
	})[num];
}