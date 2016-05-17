console.log(daysOfYear(2015)); 
console.log(daysOfYear(2016));
function daysOfYear(year)   
{  
     
  return isLeapYear(year) ? 366 : 365;  
}  
  
function isLeapYear(year) {  
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);  
}   