function englishOrdinalSuffix(date){  
    var dt = date.getDate();  

    return dt>3?dt+"th":(dt==2?2+"nd":(dt==1?1+'st':3+'rd'));  
}  
  
dt = new Date(2015, 10, 1); 
console.log(englishOrdinalSuffix(dt));