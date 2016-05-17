function secondsWithoutZeroes(dt)   
{   

  return dt.getSeconds()||0;  
}  
  
dt = new Date();   
console.log(secondsWithoutZeroes(dt));   
  
dt = new Date(1989, 10, 1);   
console.log(secondsWithoutZeroes(dt));  