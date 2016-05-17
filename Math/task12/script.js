function natural(n)   
      { 
      if (typeof n !== 'number')   
            return false;   
              
     return (n >= 0) && (Math.floor(n) === n) && n !== Infinity; 
        }  
console.log(natural(-15));  
console.log(natural(1));
console.log(natural(10.22));  
console.log(natural(10/0));  