console.log(union([1, 2, 3], [100, 2, 1, 10]));
function union(arr1,arr2) {
var array=arr1.filter(function(a){for (var i = 0; i < arr2.length; i++) {
	if(arr2[i]==a)return false;
}
return true;});
for (var i = 0; i < arr2.length; i++) {
	array.push(arr2[i]);
}
return array;
}
