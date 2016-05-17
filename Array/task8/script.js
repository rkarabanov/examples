function sort(array) {

		
	var max=0,maxValue='';
	var buffer=0;
	for (var j = 0; j < array.length-1; j++) {
	for (var i = 1+j; i < array.length; i++) {
		if(array[j]===array[i]){
			buffer++;
		}
	}
	if(max<buffer){
			max=buffer;
					maxValue=array[j];	}
			buffer=0;
}
	return maxValue+" "+ ++max+" Times";
}
console.log(sort([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));