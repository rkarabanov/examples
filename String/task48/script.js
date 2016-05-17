function successor(str) {  
	var arr=[];
length=str.length-1;
       for (var i = length; i > -1; i--) {
arr[length -i]=arr[length-i]||0;
arr[length-i]+=str.charCodeAt(i)+1;
       	if(str.toLowerCase().charCodeAt(i)>=97&&str.toLowerCase().charCodeAt(i)<=123){
       		
       		if(arr[length-i]>=122) {
       		     	arr[length-i]-=(122-98);
       		     	arr[length-i+1]=1;
       		     }
       		     else if(arr[length-i]==90||arr[length-i]==91){
					arr[length-i]-=(26);
       		     	arr[length-i+1]=1;
       		     }
       	}

       else	if(str.charCodeAt(i)>=48&&str.charCodeAt(i)<=59){
       		if(arr[length-i]>=58) {
       		     	arr[length-i]-=(10);
       		     	arr[length-i+1]=1;
       		     }
       	}
       	 if(i==0&&arr[length-i+1]!=null){
       	 		if(str.charCodeAt(i)>=97&&str.charCodeAt(i)<=123){
       	arr[length-i+1]=97;
       	 }
       	 else if(str.charCodeAt(i)>=65&&str.charCodeAt(i)<=91){
       	 	arr[length-i+1]=65;
       	 }
       	 else { arr[length-i+1]=48;}
       }
   }
   
        return arr.reverse().reduce(function (res,cur) {
        	return res+String.fromCharCode(cur);
        },"");  
    }  
  
console.log(successor('ZabcdzAZ'));  
console.log(successor('987654321'));  