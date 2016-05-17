function isWeekend(date) {

	return new Date(date).getDay()==6||new Date(date).getDay()==0?"weekend" :'undefined';
}
console.log(isWeekend('Nov 15, 2014')); 
console.log(isWeekend('Nov 16, 2014')); 
console.log(isWeekend('Nov 17, 2014'));