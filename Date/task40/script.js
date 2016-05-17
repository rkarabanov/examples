function timezoneOffsetInSeconds(dt)   
{   
   return -dt.getTimezoneOffset() * 60;  
}  
  
dt = new Date();   
console.log(timezoneOffsetInSeconds(dt));   
  
dt = new Date(1989, 10, 1);   
console.log(timezoneOffsetInSeconds(dt)); 