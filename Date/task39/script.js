function diffToGMT(dt)   
{  
   return dt.toString().split(" ")[5].split('').splice(3,8).join(''); 
}  
  
dt = new Date();   
console.log(diffToGMT(dt));   
  
dt = new Date(1989, 10, 1);   
console.log(diffToGMT(dt));