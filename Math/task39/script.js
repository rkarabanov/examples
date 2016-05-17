function thousandsSeparators(num)  
  {  
    var numParts = num.toString().split(".");
    var length=numParts[0].length;
    var string='';
    for (var i = 0; i<length; i++) {
string+=numParts[0].charAt(i);
      	if ((length-1-i)%3==0&&(length-1-i)!=0) {string+=',';}
      	      }  
    numParts[0]=string;   
    return numParts.join(".");  
  }  
  
console.log(thousandsSeparators(1000));  
console.log(thousandsSeparators(10000.23));  
console.log(thousandsSeparators(100000));  