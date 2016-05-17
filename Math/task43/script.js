console.log(primeFactorsTo(10)); 
function primeFactorsTo(num) {
	var array=[];
	var flag;
	for (var i = 2,j=0; j < num; i++) {
		flag=true;
		for (var k = 2; k < i&&flag; k++) {
			if(i%k==0){flag=false;}
		}
		if (flag) {array[j]=i;j++;}
	}
	return array;
}