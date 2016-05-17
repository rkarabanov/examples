function matrix(n) {
	var string;
	console.log('----------');  
	for (var i = 0; i < n; i++) {
		string='';
		for (var j = 0; j < n; j++) {
	if(j==i){string+=1;}
	else { string+=0;}	
	}
	console.log(string);  
	}
	console.log('----------');  
}

matrix(5);
matrix(8);