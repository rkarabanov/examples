console.log(product([1,2,3])); 
console.log(product([100,-200,3])); 
console.log(product([1,2,'a',3]));
function isNumeric(num) {  
        return !isNaN(parseFloat(num)) && isFinite(num) 
        }
function product(array) {
  	return array.reduce(function(result,cur){return isNumeric(cur)?result*cur:result},1);
  }  