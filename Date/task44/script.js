dt1 = new Date("October 13, 2014 11:11:00"); 
dt2 = new Date("October 13, 2014 11:13:00"); 
console.log(diffMinutes(dt1, dt2)); 
function diffMinutes(dt1, dt2)   
 {  
  
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;  
  diff /= 60;  
  return Math.abs(Math.round(diff));  
    
 }  