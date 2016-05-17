function factorial(number) {
	for (var i = number-1; i >0; i--) {
		number*=i;
	}
	return number;
}
console.log(factorial(6));