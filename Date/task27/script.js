dt = new Date(2015, 10, 1); 
console.log(fullMonth(dt));
function fullMonth(date) {
	return dt.toString().split(' ')[1];
}