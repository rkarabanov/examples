var array1 = [1,0,2,3,4],
array2 = [3,5,6,7,8,13,2];
console.log(sumIndividualIndex(array2,array1));
function sumIndividualIndex(array2,array1) {
	var length=Math.max(array1.length,array2.length);
	for (var i = 0; i < length; i++) {
		if(array2[i]==null) array2[i]=0;
		if(array1[i]==null) array1[i]=0;
			array1[i]+=array2[i];

	}
	return array1;
}