function isNan(val)  
{  
return val !== val;  
}  
  
console.log(isNan(NaN));  
console.log(isNan(5)); 
console.log(isNan('bar'));  