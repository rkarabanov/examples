function combsort(arr) {
    var flag=true;
    var size=arr.length-1;
    while(flag){
      if(size==1){flag=false;}
      for (var i = 0; i < arr.length-size; i++) {
        if(arr[i]>arr[i+size]){
          flag=true;
          var buf=arr[i];
          arr[i]=arr[i+size];
          arr[i+size]=buf;
        }
      }
      size--;
      if(size==0){
        size=1;
      }
    }
    return arr;
  }  
console.log(combsort([3, 0, 2, 5, -1, 4, 1])); 