function countWords(str1)  
{  
//exclude  start and end white-space  
str1 = str1.replace(/(^\s*)|(\s*$)/gi,"");  
//convert 2 or more spaces to 1    
str1 = str1.replace(/\s{2,}/gi," ");  
// exclude newline with a start spacing    
str1 = str1.replace(/\n /,"\n"); 
console.log(str1); 
return  str1.split(' ').length;  
}  
var word="The quick brown fox jumps over  the lazy dog. ";
console.log(word);
console.log(countWords(word))