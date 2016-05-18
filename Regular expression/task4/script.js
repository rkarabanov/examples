function isDateString(str)  
{  
regexp= /^(([0-2][0-9])|(3[01]))\/((0[1-9])|(1[0-2]))\/(([0-3][0-9]))[0-9]{2}/;
        if (regexp.test(str))  
          {  
            return true;  
          }  
        else  
          {  
            return false;  
          }  
}  

console.log(isDateString("01/01/2015"));  
  
console.log(isDateString("13/22/2015"));  
  
console.log(isDateString("30/01/2015")); 