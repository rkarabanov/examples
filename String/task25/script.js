console.log(alphabetizeString('United States'));
function alphabetizeString(str) {
	return str.replace(/^\s+|\s+$/g, '').split('').
	sort().join("");
}