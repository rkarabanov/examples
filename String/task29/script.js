console.log(searchWord('The quick brown fox', 'fox')); 
console.log(searchWord('aa, bb, cc, dd, aa', 'aa'));
function searchWord(str,substr) {  
	var count=0;
	while(str.indexOf(substr)>-1){
		str=str.slice((str.indexOf(substr)+substr.length), str.length);
		count++;
	}
        return substr+" was found "+ count +" times"; 
}