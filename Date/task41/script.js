function addYears(date,year)  
  {  
    return new Date(date.getFullYear()+year,date.getMonth(),date.getDate());  
  }  
  
dt = new Date(2014,10,2); 
console.log(addYears(dt, 10));