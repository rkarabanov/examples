function lastday(year,month) {
   return new Date(year, month, 0).getDate(); 
 }
console.log(lastday(2014,0)); 
console.log(lastday(2014,2)); 
console.log(lastday(2014,11));