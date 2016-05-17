 function isArray(input) {  
     if (toString.call(input).indexOf("Array") !=-1)  
    return true;  
  return false;      
    }
console.log(isArray('w3resource'));  
console.log(isArray([1, 2, 4, 0])); 