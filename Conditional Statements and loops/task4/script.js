var array=[2,-7,5,0,-2];
window.alert(largestElement(array));
function largestElement(array) {
	var lElement=array[0];
	for (var i = 1; i < array.length; i++) {
		if (array[i]>lElement) {lElement=array[i];}
	}
	return lElement;
}