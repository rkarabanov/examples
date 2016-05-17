function isRegexp(value)  
        {  
       return toString.call(value) === '[object RegExp]';  
        }  
  
console.log(isRegexp(/test/g));
console.log(isRegexp(72));  