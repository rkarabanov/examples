function hoursWithoutZeroes(date)   
{   
  return date.getHours()||"I don't know";  
}  
  
dt = new Date();   
console.log(hoursWithoutZeroes(dt));   
  
dt = new Date(1989, 10, 1);   
console.log(hoursWithoutZeroes(dt));  