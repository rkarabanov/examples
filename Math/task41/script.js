function sumDigits(num)  
  {  
     
    return num.toString().split('').reduce(function(result,cur){return result+(+cur);},0);  
  }  
  
console.log(sumDigits(1248)); 
console.log(sumDigits(145407));  