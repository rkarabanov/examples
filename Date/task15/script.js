function quarterOfTheYear(date) {  
	var month=date.getMonth();
return Math.floor(month/3) +1 ;}  
console.log(quarterOfTheYear(new Date(2015, 1, 21))); 
console.log(quarterOfTheYear(new Date(2015, 6, 18)))
console.log(quarterOfTheYear(new Date()))