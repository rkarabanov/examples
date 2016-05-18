function isAlphaNumeric(str)  
{  
 regexp = /^[0-9a-zA-Z]+$/;  
    
        if (regexp.test(str))  
          {  
            return true;  
          }  
        else  
          {  
            return false;  
          }  
}  
  
console.log(isAlphaNumeric("37828sad"));  
  
console.log(isAlphaNumeric("3243#$sew"));  