function compareDates(date1,date2) {  
 
   return date2<date1? "Date1 > Date2" :(date2>date1?"Date2 > Date1":"Date1 = Date2" );  
    }  
console.log(compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); 
console.log(compareDates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))); 
console.log(compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));