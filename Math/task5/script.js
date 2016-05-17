function decimals(n, d) {  
 if ((typeof n !== 'number') || (typeof d !== 'number'))  
   return false; 
    return n.toFixed(d);  
    }  
console.log(decimals(2.100212, 2));  
console.log(decimals(2.100212, 3));  
console.log(decimals(2100, 2));  