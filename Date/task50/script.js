function startOfWeek(date)  
  {  
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);  
    
    return new Date(date.setDate(diff));  
   
  }  
  
 
  dt2 = new Date(2014,10,11);  
console.log(startOfWeek(dt2)); 