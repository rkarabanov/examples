console.log(arrayClone([1, 2, 4, 0])); 
console.log(arrayClone([1, 2, [4, 0]]));
function arrayClone(array) {
	return array.slice(0);
}