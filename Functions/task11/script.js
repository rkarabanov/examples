var array1=[12,2,3,412,21, 3214 ,12,425];
function_second(array1);

function function_second (array) {
	array=array.sort(function(a,b){return a-b});

console.log(array[1]+" "+array[array.length-2]);
}