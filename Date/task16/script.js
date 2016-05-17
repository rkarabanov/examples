function daysPassed(date) {  
        var days=0;
        for (var i = 0; i < date.getMonth(); i++) {
        	days+=getDaysInMonth(i,date.getFullYear());
        }
        return (days+getDaysInMonth(date.getMonth(),date.getFullYear(),date.getDate()));
        }  
function getDaysInMonth(month, year,day) {  
	if(day==null){return new Date(year, month, 0).getDate(); }
return new Date(year, month, day).getDate();
}  

console.log(daysPassed(new Date(2015, 0, 15)));
console.log(daysPassed(new Date()));