console.log(rand([ 43, 56, 23, 89, 88, 90, 99, 652]))
function rand(array) {
	return array[Math.floor(Math.random()*array.length)];
}