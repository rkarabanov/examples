console.log(rand(20,1)); 
console.log(rand(1,10)); 
console.log(rand(6)); 
console.log(rand());
function rand(a,b) {
	if(a==null){
		return 0;
	}
	if(b==null){
		b=0;
	}
	return Math.min(a,b)+Math.floor(Math.random()*(Math.max(a,b)-Math.min(b,a)+1));
}