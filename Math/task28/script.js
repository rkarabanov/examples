function roundTo5(num) {
	for (var i = 0; i < 5; i++) {
		if((num+i)%5==0){return (num+i);}
	}
}

console.log(roundTo5(21));