function colorPrint() {
	color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
	o = ["th","st","nd","rd"];
	
	for (var i = 0; i < color.length; i++) {
		if (i+1<4) {
			console.log((i+1)+o[i+1]+' choice is '+color[i]) ;
		} else {
			console.log((i+1)+o[0]+' choice is '+color[i]) ;
		}
	}

}
colorPrint();