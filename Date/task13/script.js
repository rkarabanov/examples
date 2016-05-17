function timeConvert(num) { 
return num + " minutes = " + Math.floor(num/60) + " hour(s) and " + num%60 + " minute(s).";  
}  
console.log(timeConvert(239));