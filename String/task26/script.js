console.log(removeFirstOccurrence("The quick brown fox jumps over the lazy dog", 'the'));
function removeFirstOccurrence(str,searchstr) {
    if (str.indexOf(searchstr) === -1) {  
        return str;  
    }  
    return str.slice(0, str.indexOf(searchstr)) + str.slice(str.indexOf(searchstr) + searchstr.length); 
}