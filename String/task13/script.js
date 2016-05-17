console.log(repeat('Ha!'));  
console.log(repeat('Ha!',2));  
console.log(repeat('Ha!',3));  
function repeat(str,num) {
	num=num||1;
	var str1=str;
	for (var i = 0; i < num-1; i++) {
		str+=str1;
	}
	return str;
}