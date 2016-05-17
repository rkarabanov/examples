function isNumber(value)  
        {  
        return !isNaN(value) && toString.call(value) === '[object Number]';  
       }  
  
console.log(isNumber(NaN));  
  
console.log(isNumber(42.32));  
  
console.log(isNumber(72));  