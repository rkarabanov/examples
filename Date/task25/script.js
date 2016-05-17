dt = new Date(2015, 10, 1); 
console.log(fullMonth(dt));
function fullMonth(date) {
	longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return longMonths[dt.getMonth()];
}