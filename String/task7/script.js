console.log(stringParameterize("Robin Singh from USA"));
function stringParameterize(str) {
	return str.toLowerCase().split(" ").join("-");
}