console.log(protectEmail("robin_singh@example.com"));
function protectEmail(str) {
	var str1= str.split("@");
	str1[0]=str1[0].slice(0,5);
	str1[0]+="...";
	return str1.join("@");
}