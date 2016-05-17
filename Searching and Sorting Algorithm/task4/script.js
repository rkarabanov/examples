  function insertionSort(arr)  
{  
  for (var i = 1; i < arr.length; i++)   
  {  
  var flag=true;
  var ii=i;
  for (var j = ii-1; flag && j >= 0; j--) {
  	if (arr[j]<=arr[ii]) {
  		flag=false;
  	}
  	else{
  		var buf = arr[ii]; 
  	arr[ii]=arr[j];
  	arr[j]=buf;
  	ii--;
  	}
  }
  }  
  return arr;  
}  
  
console.log(insertionSort([3, 0, 2, 5, -1, 4, 1])); 