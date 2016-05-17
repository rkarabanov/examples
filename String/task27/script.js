function asciiToHexa(str)  
  {  
    var arr1 = [];  
    for (var n = 0; n < str.length; n ++)   
     {  
        var hex = Number(str.charCodeAt(n)).toString(16);  
        arr1.push(hex);  
     }  
    return arr1.join('');  
   }  
  
console.log(asciiToHexa('12'));  
console.log(asciiToHexa('100')); 