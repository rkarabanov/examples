console.log(stringChop('w3resource')); 
console.log(stringChop('w3resource',2)); 
console.log(stringChop('w3resource',3));
function stringChop(str, num) {  
        num=num||str.length;
        var array=[];
        var str1='';
        for (var i = 0; i < str.length; i++) {
        	
        	str1+=str[i]
        	if ((i+1)%num==0) {
        		array.push(str1);
        		str1='';
        	}
        }
        if(str1!=''){array.push(str1);}
        return array;
}  