console.log(capitalize('js string exercises'));
function capitalize(str) {
	var arr =str.toLowerCase().split("");
	arr[0]=arr[0].toUpperCase();
	return arr.join('');
}