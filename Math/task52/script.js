console.log(complexSum(4,-7,8,9));  
function complexSum(real1,imag1,real2,imag2) {
	return (real1*real2- imag1*imag2)+" i*"+(imag1*real2+real1*imag2);
}