function shortDays(date) {
var longDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];  
 var subtring=date.toString().split(" ")[0];
 for (var i = 0; i < longDays.length; i++) {
 	if(longDays[i].indexOf(subtring)>-1)return longDays[i];
 }

}
dt = new Date(2015, 10, 1); 
console.log(shortDays(dt));
dt1 = new Date(2016, 4, 16); 
console.log(shortDays(dt1));
