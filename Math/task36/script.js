console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(68));
function isPowerOfTwo(n) {
	var i=0;
	while(true){
		if(n==Math.pow(2,i)) {return true;}
		if(n<Math.pow(2,i)) {return false;}
		i++;
	}
}
