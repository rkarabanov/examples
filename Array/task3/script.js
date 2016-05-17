console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
function first(array,num) {
	if(num==null){
		num=1;
	}
	var arr=[];
	for (var i = 0; i < array.length&&i<num; i++) {
		arr[i]=array[i];
	}
return arr;
}