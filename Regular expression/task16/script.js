function isHexadecimal(str)  
{  
 regexp = /^[0-9a-fA-F]+$/;  
    
        if (regexp.test(str))  
          {  
            return true;  
          }  
        else  
          {  
            return false;  
          }  
}  
  
console.log(isHexadecimal("ffffff"));  
  
console.log(isHexadecimal("fz5500"));  