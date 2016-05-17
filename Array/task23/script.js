console.log(difference([1, 2, 3], [100, 2, 1, 10]));
function difference(arr1,arr2) {
var array1=arr1.filter(function(a){for (var i = 0; i < arr2.length; i++) {
	if(arr2[i]==a)return false;
}
return true;});
var array2=arr2.filter(function(a){for (var i = 0; i < arr1.length; i++) {
	if(arr1[i]==a)return false;
}
return true;});
for (var i = 0; i < array2.length; i++) {
	array1.push(array2[i]);
}
return array1;
}
