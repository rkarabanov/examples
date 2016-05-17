console.log(power2(16)); 
console.log(power2(18)); 
console.log(power2(256));
function power2(num) {
	for (var i = 0; i < num; i++) {
		if(Math.pow(2,i)===num) return true;
		if(Math.pow(2,i)>num) return false;
	}
}