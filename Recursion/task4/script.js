function sumOfArray(array) {
	var sum=0;
	for (var i = 0; i < array.length; i++) {
		sum+=array[i];
	}
	return sum;
}
console.log(sumOfArray([1, 2, 3, 4, 5, 6]));