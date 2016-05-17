function isDate(date) {  
   return Object.prototype.toString.call(date).indexOf('Date')>=0;
}  
  
console.log(isDate("October 13, 2014 11:13:00")); 
console.log(isDate(new Date(86400000))); 
console.log(isDate(new Date(99,5,24,11,33,30,0))); 
console.log(isDate([1, 2, 4, 0]));