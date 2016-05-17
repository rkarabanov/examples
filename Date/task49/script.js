function diffYears(dt2, dt1)   
 {  
  
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;  
   diff /= (60 * 60 * 24 );  
  return Math.abs(Math.round(diff/365.25));  
    
 }  
  
dt1 = new Date("June 13, 2014 08:11:00"); 
dt2 = new Date("October 19, 2017 11:13:00"); 
console.log(diffYears(dt1, dt2)); 