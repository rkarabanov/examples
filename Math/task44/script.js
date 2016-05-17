console.log(Hamming(20));
function Hamming(num) {  
        var succession = [];  
        var i=1,j=0;
        while(num!=j){
        	var buffer=i;
        while (buffer % 5 === 0) buffer /= 5;  
        while (buffer % 3 === 0) buffer /= 3;  
        while (buffer % 2 === 0) buffer /= 2; 
        	if(buffer===1){succession[j]=i;j++;}
        	i++;
        }
        return succession;  
  }  