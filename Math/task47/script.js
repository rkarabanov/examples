function greatestCommonDivisor(array) {
  for (var i = 0; i < array.length; i++) {
    array[i]=Math.abs(array[i]);
  }
  array=array.sort(function(a,b) {return a-b});
var gcd=1;
 for (var i = 1; i<=array[0]; i++) {
  if(array[0]%i==0){
    var flag=true;
  for (var j = 1; j < array.length; j++) {
    if(array[j]%i!=0)
      {
        flag=false;
      }
  }
    if(flag)
      {
        gcd=i;
      }
  }
}
  return gcd;
}
console.log(greatestCommonDivisor([12,24,56]));
console.log(greatestCommonDivisor([112,344,556,414]));
console.log(greatestCommonDivisor([132,176]));