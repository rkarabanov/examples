var myColor = ["Red", "Green", "White", "Black"];
console.log(string(myColor,","));
console.log(string(myColor,"-"));
console.log(string(myColor,"+"));
function string(array,str) {
	return array.join(str);
}