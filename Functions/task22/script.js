console.log(occurrences("mynameisroman",'o'));
console.log(occurrences("mynameisroman",'m'));
function occurrences(string, char) {
	var number=0;
	for (var i = 0; i < string.length; i++) {
		if(string[i]===char)number++;
	}
	return number;
}