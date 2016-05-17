
function Char_Counts(string) {
	var uniqueString = unique(string);
	var buf;
	var array=[];
	for (var i = 0; i < uniqueString.length; i++) {
		buf=0;
		for (var j = 0; j < string.length; j++) {
			if(string[j]==uniqueString[i])buf++;
		}
		array.push(uniqueString[i]+"-"+buf);
	}
	return array;
}
function unique(string) {
var stringUnique="";
for (var i = 0; i < string.length; i++) {
	var flag=true;
	for (var j = 0; j < stringUnique.length; j++) {
		if(stringUnique[j]===string[i]){
			flag=false;
		}
	}
	if(flag){stringUnique+=string[i];}
}
return stringUnique;
}

console.log(Char_Counts(window.prompt("Enter a string")));