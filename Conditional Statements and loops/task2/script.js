var array=[2,-7,5];
window.alert(specifiedSign(array));
function specifiedSign(array) {
	var minus=0;
	for (var i = 0; i < array.length; i++) {
		if (array[i]<0) {minus++;}
	}
	if (minus%2==0) {return "The sign is +";}
	else {return "The sign is -";}
}