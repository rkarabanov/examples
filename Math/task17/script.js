console.log(sum([1,2,3])); 
console.log(sum([100,-200,3])); 
console.log(sum([1,2,'a',3]));
function isNumeric(num) {  
        return !isNaN(parseFloat(num)) && isFinite(num) 
        }
function sum(array) {
  	return array.reduce(function(result,cur){return isNumeric(cur)?result+cur:result},0);
  }  