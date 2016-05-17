console.log(isInt(23)); 
console.log(isInt(4e2)); 
console.log(isInt(NaN)); 
console.log(isInt(23.75));
console.log(isInt(-23));
function isInt(n) {  
       if (typeof n !== 'number')   
            return false;   
              
     return  (Math.floor(n) === n) && n !== Infinity;  
        }  
