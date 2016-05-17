console.log(binomial(8,3)); 
console.log(binomial(10,2));
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