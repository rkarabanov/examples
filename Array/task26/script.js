function sumEquals(array,n) {
	for (var i = 0; i < array.length; i++) {
		for (var j = i+1; j < array.length; j++) {
			if(array[j]+array[i]==n)  return[i,j];
		}
		
	}

	return -1;
}
console.log(sumEquals( [10,20,10,40,50,60,70],100));
