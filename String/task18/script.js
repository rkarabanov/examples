console.log(count("the quick brown fox jumps over the lazy dog", 'the'));
function count(str,substr) {  
	var count=0;
	while(str.indexOf(substr)>-1){
		str=str.slice((str.indexOf(substr)+substr.length), str.length);
		count++;
	}
        return count; 
}}