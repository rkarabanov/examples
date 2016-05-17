function isString(input) {  
  if (Object.prototype.toString.call(input) === '[object String]')  
    return true;  
  else  
    return false;     
    };  
console.log(isString('w3resource'));  
console.log(isString([1, 2, 4, 0]));  