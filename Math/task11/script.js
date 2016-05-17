function leastCommonMultiple(array) {
  for (var i = 0; i < array.length; i++) {
    array[i]=Math.abs(array[i]);
  }
var lcm=1;
var length=Math.max.apply(null,array);
 for (var i = 2; i<=length; i++) {
 	var flag=false;
	for (var j = 0; j < array.length; j++) {
    if(array[j]%i==0)
      {
      flag=true;
      array[j]/=i;
            }
  }
  
       if(flag) {
       	lcm*=i;
       	i--;
       }
  }
  for (var i = 0; i < array.length; i++) {
  	lcm*=array[i];
  }
return lcm;
}
console.log(leastCommonMultiple([12,24,44]));
console.log(leastCommonMultiple([112,344,23]));
console.log(leastCommonMultiple([132,176,23]));