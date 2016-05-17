function minutesWithZeroes(dt)   
{   

  return (dt.getMinutes()||0).toString().length>1?dt.getMinutes():"0"+(dt.getMinutes()||0);  
}  
  
dt = new Date();   
console.log(minutesWithZeroes(dt));   
  
dt = new Date(1989, 10, 1);   
console.log(minutesWithZeroes(dt));  