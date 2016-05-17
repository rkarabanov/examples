console.log(repeatString('a', 4)); 
console.log(repeatString('a'));
function repeatString(str,num) {
	if(num==null){return "Error in string or count.";}
	var str1=str;
	for (var i = 0; i < num-1; i++) {
		str+=str1;
	}
	return str;
}