function isHexcolor(str)  
{  
 regexp = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;  
    
        if (regexp.test(str))  
          {  
            return true;  
          }  
        else  
          {  
            return false;  
          }  
}  
  
console.log(isHexcolor("#444"));  
  
console.log(isHexcolor("#3333"));  