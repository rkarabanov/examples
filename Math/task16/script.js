
console.log(isNumeristic(12)); 
console.log(isNumeristic('abcd')); 
console.log(isNumeristic('12')); 
console.log(isNumeristic(' ')); 
console.log(isNumeristic(1.20)); 
console.log(isNumeristic(-200));
function isNumeristic(num) {  
        return !isNaN(parseFloat(num)) && isFinite(num) 
        }  
 
