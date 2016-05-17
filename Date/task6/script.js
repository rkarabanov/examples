function addMinutes(date,minets) {
	return new Date(date.getTime()+minets*60000);
}
console.log(addMinutes(new Date(2014,10,2), 30).toString());