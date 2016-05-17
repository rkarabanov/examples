console.log(sumAndProduct([10,1,2,3,4])); 
function sumAndProduct(array) {
  return "Product: "+array.reduce(function(res,cur){return res*cur;},1)+
  " Sum: "+array.reduce(function(res,cur){return res+cur;},0);
}