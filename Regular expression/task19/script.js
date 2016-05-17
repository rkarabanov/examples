function elementsLarger(arr,num) {
	arr=arr.sort(function(a,b){return a-b});
	var buf;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]>num)return arr.slice(i,arr.length);
	}
	return null;
}
console.log(elementsLarger([23,312,12,346,12,46,67,1243,23],49));