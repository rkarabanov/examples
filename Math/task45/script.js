function subtraction(arr)   
 {  
  return arr.reduce(function(res,cur){return res-cur;},2*arr[0]);  
  }  
console.log(subtraction([7,3, 2,-1]));  