function isCreditCard(str)  
{  
regexp = /^(([0-9]{4}-){3})([0-9]{4})$/;
    
        if (regexp.test(str))  
          {  
            return true;  
          }  
        else  
          {  
            return false;  
          }  
}  
  
console.log(isCreditCard("9999-9999-9999-9999"));  
  
console.log(isCreditCard("999-9999-9999-992"));  