function dayOfTheMonth(date) {
 return date.getDate()<10?"0"+date.getDate():date.getDate();
}
d= new Date(2015, 10, 1); 
console.log(dayOfTheMonth(d));