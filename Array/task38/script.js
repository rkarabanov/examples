console.log(move([10, 20, 30, 40, 50], -1, -2));
console.log(move([10, 20, 30, 40, 50], 0, 2));
function move(arr,a,b) {
var x= a<0?arr.length+a:a;
var y= b<0?arr.length+b:b;

  var buf=arr[x];
  arr[x]=arr[y];
	arr[y]=buf;
	return arr;
}
