console.log(textTruncate('We are doing JS string exercises.')) 
console.log(textTruncate('We are doing JS string exercises.',19))
console.log(textTruncate('We are doing JS string exercises.',15,'!!'))
function textTruncate(str,num,str1) {  
	if(num==null)return str;
	str1=str1||"...";
        return str.slice(0,num)+str1;
        }  
 
