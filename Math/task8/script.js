function  greatestCommonDivisor(number1,number2) {
var gcd;
number1=Math.abs(number1);
number2=Math.abs(number2);
	for (var i = 1; i<=number1&&i<=number2; i++) {
		if(number2%i==0&&number1%i==0)
			{
				gcd=i;
			}
	}
	return gcd;
}
console.log(greatestCommonDivisor(132,176));