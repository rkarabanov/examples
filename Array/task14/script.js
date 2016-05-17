console.log(set([3, 'a', 'A', 'a', 2, 3, 'A', 3, 'a', 2, 4, 9, 3]));
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
