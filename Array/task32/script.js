function contains(array,num)  
{  
    return array.reduce(function (res,cur) {
    	return res||cur==num;
    },false);    
}  
  
console.log(contains([2, 5, 9, 6], 5));
console.log(contains([2, 5, 9, 6], 7));