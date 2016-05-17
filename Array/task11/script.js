console.log(sumSq([0,1,2,3,4])); 
function sumSq(array) {
  return array.reduce(function(res,cur){return res+cur*cur;},0);
}