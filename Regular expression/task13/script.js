function isUkPostCode(str)  
{  
 regexp = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;  
    
        if (regexp.test(str))  
          {  
            return true;  
          }  
        else  
          {  
            return false;  
          }  
}  
  
console.log(isUkPostCode("B294HJ"));  
  
console.log(isUkPostCode("7892"));  