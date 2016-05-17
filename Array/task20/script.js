console.log(duplicateValues([3, 5, 4, 4, 2, 3, 1, 3, 9, 2, 4, 9, 3]));
function set(array) {
	var arr=[];
for (var i = 0; i < array.length; i++) {
	var flag=true;
	for (var j = 0; j < arr.length; j++) {
		if(arr[j]===array[i]){flag=false;}
	}
	if(flag){arr.push(array[i]);}
	}
	return arr;
}
function duplicateValues(array) {
	var arr=set(array);
	var bufferArray=[];
	for (var i = 0; i < arr.length; i++) {
		var buffer=0;
		for (var j = 0; j < array.length; j++) {
			if(array[j]==arr[i]){buffer++;}
		}
		if (buffer>1) {bufferArray.push(arr[i]);}
	}
	return bufferArray;
}