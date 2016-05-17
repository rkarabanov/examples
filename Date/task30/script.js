function lowerAmPm(dt)   
{   
  return dt.getHours() < 12 ? 'am' : 'pm';  
}  
  
dt = new Date();   
console.log(lowerAmPm(dt));   
  
dt = new Date(1989, 10, 1);   
console.log(lowerAmPm(dt));  