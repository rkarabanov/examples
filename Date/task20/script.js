function shortDays(date) {

	return date.toString().split(" ")[0];
}
dt = new Date(2015, 10, 1); 
console.log(shortDays(dt));
dt1 = new Date(2016, 4, 16); 
console.log(shortDays(dt1));