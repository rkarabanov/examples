function removeArrayElement(array,num)  
{  
    return array.filter(function (a) {
    	return a!=num;
    });    
}  
  
console.log(removeArrayElement([2, 5, 9, 6], 5));