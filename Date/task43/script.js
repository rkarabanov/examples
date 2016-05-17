function addMonths(dt, n)   
 {  
 return new Date(dt.setMonth(dt.getMonth() + n));        
 }  
  
dt = new Date();  
console.log(addMonths(dt, 4).toString());    
  
dt = new Date(2014,10,2);  
console.log(addMonths(dt, 10).toString());