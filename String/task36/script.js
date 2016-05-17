function zeroFill(number, width, osign) { 
osign=osign||'';
number=number.toString();
if(number.length>width){return "wrong width";} 
   for (var i = 0; i < width-number.length; i++) {
   	number='0'+number;
   }
number=osign+number;
return number;
}  
  
console.log(zeroFill(120, 5, '-'));  
  
console.log(zeroFill(29, 4)); 