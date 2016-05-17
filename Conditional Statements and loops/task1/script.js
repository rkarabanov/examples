num1=window.prompt("Enter first number");
num2=window.prompt("Enter second number");
console.log(largerNumber(num1,num2));
function largerNumber(num1,num2) {
	if (num1>num2) {return num1;} else {return num2;}
}