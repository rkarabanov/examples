var day=new Date();
var cmas=new Date(day.getFullYear(), 11, 25);  
if (day.getMonth()==11 && day.getDate()>25)   
{  
cmas.setFullYear(cmas.getFullYear()+1);   
}
if(day.getMonth()==11 && day.getDate()==25) {
	console.log("Marry, Christmas!");
}
else{
var one_day=3600*24*1000;  
console.log(Math.ceil((cmas.getTime()-day.getTime())/(one_day))+  
" days left until Christmas!");  
}