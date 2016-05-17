function br_search (array,target)   
{  
  while(true){
  	half= parseInt(array.length / 2);
if(target===array[half]){return target;}
  }
   if (target > array[half])   
  {  
    array.slice(half,array.length);  
  }   
  else  
  {  
    array.slice(0, half);  
  } 
}  
  
 
  
console.log(br_search([0,1,2,3,4,5,6],5)); 