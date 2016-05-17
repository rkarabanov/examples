console.log(binToDec('110011')); 
console.log(binToDec('100'));
function binToDec(binary) {
	var result=0;
	for (var i = binary.length-1; i > -1; i--) {
		result+=binary[i]*Math.pow(2,binary.length-1-i);
	}
	return result;
}