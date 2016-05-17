  function selectionSort(arr)  
{  
	var flag=true;
	while(flag){
	flag=false;
	var cur=0;
for (var i = 1; i < arr.length; i++) {
	if(arr[cur]>arr[i]){
		flag=true;
	var buf = arr[i]; 
  	arr[i]=arr[cur];
  	arr[cur]=buf;
cur=i;
	}
	else{
		cur++;
	}
}

	}

  return arr;  
}  
  
console.log(selectionSort([3, 0, 2, 5, -1, 4, 1])); 