var date=new Date();
var days = ["Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday","Sunday"];
console.log("Today is : "+days[date.getDay()-1]);
var hour = date.getHours();
var prepand
if(hour>=12){
	prepand="PM";
	hour-=12;
}
else{ 
prepand="AM";
}
console.log("Current Time : "+hour+" "+prepand+" : "+ date.getMinutes() +" : "+date.getSeconds());