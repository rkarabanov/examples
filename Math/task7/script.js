function max(array) {
	return array.reduce(function(result,curr){return result>curr?curr:result;},array[0]);
}
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));