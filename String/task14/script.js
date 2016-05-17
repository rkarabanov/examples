console.log(insert('We are doing some exercises.')); 
console.log(insert('We are doing some exercises.','JavaScript ')); 
console.log(insert('We are doing some exercises.','JavaScript ',18));
function insert(str0,str1, num){ 
	str1=str1||'';
	num=num||0;
 return str0.slice(0,num)+str1+str0.slice(num,str0.length);  
}  