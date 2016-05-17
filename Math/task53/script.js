console.log(complexSum(4,-7,8,9));  
function complexSum(real1,imag1,real2,imag2) {
	 var denom = imag2 * imag2 + real2 * real2;  
var real = (real1*real2+ imag1*imag2) /denom;  
var imaginary = (imag1*real2+real1*imag2) /denom;   

	return (real)+" i*"+(imaginary);
}