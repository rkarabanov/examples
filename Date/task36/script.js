function secondsWithZeroes(dt)   
{   

  return (dt.getSeconds()||0).toString().length>1?dt.getSeconds():"0"+(dt.getSeconds()||0);  
}  
  
dt = new Date();   
console.log(secondsWithZeroes(dt));   
  
dt = new Date(1989, 10, 1);   
console.log(secondsWithZeroes(dt));  