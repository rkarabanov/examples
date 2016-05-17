function countingSort(arr, min, max)  
  {  
    var i, z = 0, count = [];  
   
    for (i = min; i <= max; i++) {  
        count[i] = 0;  
    }  
   
    for (i=0; i < arr.length; i++) {  
        count[arr[i]]++;  
    }  
   
    for (i = min; i <= max; i++) {  
        while (count[i]-- > 0) {  
            arr[z++] = i;  
        }  
    }  
 return arr;  
}  
var arra = [3, 0, 2, 5, 4, 1];  
console.log(countingSort(arra, Math.min.apply(Math,arra), Math.max.apply(Math,arra)));  