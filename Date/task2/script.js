function curday(char) {  
	var date=new Date();
   return date.getDate()+char+date.getMonth()+char+date.getFullYear();
}  
console.log(curday('/')); 
console.log(curday('-'));