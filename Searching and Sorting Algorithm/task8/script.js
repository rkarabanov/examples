function sortCocktail(arr)   
{  
    var swapped;  
    do {  
        for(var i = 0; i < arr.length - 2; i++) {  
            if(arr[i] > arr[i+1]) {  
                var temp = arr[i];  
                arr[i] = arr[i+1];  
                arr[i+1] = temp;  
                swapped = true;  
            }  
        }     
        if(!swapped) {  
            break;  
        }  
        swapped = false;  
        for( i = arr.length - 2; i > 0; i--) {  
            if(arr[i] > arr[i+1]) {  
                var temp1 = arr[i];  
                arr[i] = arr[i+1];  
                arr[i+1] = temp1;  
                swapped = true;  
            }  
        }  
    } while(swapped);  
  return arr;  
}  

console.log(sortCocktail([3, 0, 2, 5, -1, 4, 1]));  