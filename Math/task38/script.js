console.log(numberTest(8));
console.log(numberTest(68.2));
function numberTest(n) {
	return n===parseInt(n)?"It is a whole number.":"Number has a decimal place.";
}
