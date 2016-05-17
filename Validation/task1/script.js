console.log(isBoolean(true)); 
console.log(isBoolean('bar')); 
function isBoolean(value) {
 	return toString.call(value) === '[object Boolean]';
 } 