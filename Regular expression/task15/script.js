function isSocialSecurityNumber(str)  
{  
 regexp = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;  
    
        if (regexp.test(str))  
          {  
            return true;  
          }  
        else  
          {  
            return false;  
          }  
}  
  
console.log(isSocialSecurityNumber("019-90-5680"));  
  
console.log(isSocialSecurityNumber("K8V-3Y1"));  