function sqrtToInt(num) {
	if(num<0) return false;
	return parseInt(Math.sqrt(num));
}

console.log(sqrtToInt(21));