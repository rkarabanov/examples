dt1 = new Date("October 13, 2014 08:11:00"); 
dt2 = new Date("October 19, 2014 11:13:00"); 
console.log(diffDays(dt1, dt2));
function diffDays(dt1, dt2)   
 {  
  
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;  
  diff /= 24*3600;  
  return Math.abs(Math.round(diff));  
    
 }