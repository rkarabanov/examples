function hoursWithZeroes(dt)   
{   
  return ((dt.getHours() % 12 || 12) < 10 ? '0' : '') + (dt.getHours() % 12 || 12);  
}  
  
dt = new Date();   
console.log(hoursWithZeroes(dt));   
  
dt = new Date(1989, 10, 1);   
console.log(hoursWithZeroes(dt));  