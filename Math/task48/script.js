function fallingFactorial(n, k)   
{  
  var i = (n - k + 1),  
    r = 1;  
  while (i <= n)   
  {  
    r *= i++;  
  }  
  return r;  
}  
console.log(fallingFactorial(10, 2));  