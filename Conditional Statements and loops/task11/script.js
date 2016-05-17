function  greatestCommonDivisor(number1,number2) {
var gcd;
	for (var i = 1; i<=number1&&i<=number2; i++) {
		if(number2%i==0&&number1%i==0)
			{
				gcd=i;
			}
	}
	return gcd;
}
console.log(greatestCommonDivisor(77,176));