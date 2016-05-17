console.log(truncateString("Robin Singh"));
function truncateString(str) {
	var str1= str.split(" ");
	for (var i = 1; i < str1.length; i++) {
		str1[i]=str1[i][0]+".";
	}
	return str1.join(" ");
}