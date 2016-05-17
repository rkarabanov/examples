console.log(notrepeated("mynameisroman"));
console.log(notrepeated("mnameisroman"));
function notrepeated(string) {
	var flag;
	for (var i = 0; i < string.length; i++) {
		flag=true;
	for (var j = i+1; j < string.length&&flag; j++) {
	if(string[i]===string[j]){flag=false;}
}
	if (flag) {return string[i];} 
	}
	return null;
}