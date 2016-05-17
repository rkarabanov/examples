function convert(number, initial, change) {  
   if ((initial && change) <2 || (initial && change)>36)  
    return 'Error';  
     
    return parseInt(number + '', initial)  
    .toString(change);  
}  
  
console.log(convert('E164',16,10));  
console.log(convert(1000,2,8));