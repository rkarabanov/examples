console.log(sentenceCase('PHP exercises. python exercises.')); 
function sentenceCase(str) {
	array=str.split(' ');
	str='';
	
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array[i].length; j++) {
			str = j==0? str+ array[i][j].toUpperCase():str+array[i][j].toLowerCase();
		}
		str=str+" ";
	}
	return str;
}