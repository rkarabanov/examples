function sort(array) {

	return array.sort(function (a,b) {
		return(a-b) ;});}
console.log(sort([-12,-34,0,-56,-1]));