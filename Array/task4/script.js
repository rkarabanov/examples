console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));
function last(array,num) {
	if(num==null){
		num=1;
	}
	var arr=[];
	for (var i = 0; i < array.length&&i<num; i++) {
		arr[i]=array[array.length-1-i];
	}
return arr.reverse();
}