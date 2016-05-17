function upperCase(str)  
{  
   regexp = /^[A-Z]/;  
   if (regexp.test(str))  
    {  
      return true;
    }   
    else  
    {  
      return false;  
    }  
}  
console.log(upperCase('Abcd'));  
console.log(upperCase('abcd'));  