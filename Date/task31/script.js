function upperAmPm(dt)   
{   
  return dt.getHours() < 12 ? 'AM' : 'PM';  
}  
  
dt = new Date();   
console.log(upperAmPm(dt));   
  
dt = new Date(1989, 10, 1);   
console.log(upperAmPm(dt));  