function isUsZipCode(str)  
{  
 regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;  
    
        if (regexp.test(str))  
          {  
            return true;  
          }  
        else  
          {  
            return false;  
          }  
}  
  
console.log(isUsZipCode("03201-2150"));  
console.log(isUsZipCode("78922"));  
console.log(isUsZipCode("7892"));