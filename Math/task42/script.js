console.log(binomial(6,2)); 
console.log(binomial(5,3));
function binomial(n,k) {
	var result=1;
	for (var i = k+1; i <= n; i++) {
		result*=i;
	}
	for (var i = 1; i <=(n-k); i++) {
	result/=i;
	}
	return result;
}