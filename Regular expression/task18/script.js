function isDomain(str)  
{  
regexp=/^www\.((\w|[-.]){1,})\w\.[a-z]{2,}?/;
        
        if (regexp.test(str))  
          {  
            return true;  
          }  
        else  
          {  
            return false;  
          }  
}  
  
console.log(isDomain('www.example.com'));  
  
console.log(isDomain('www.npm.co.uk'));  
  
console.log(isDomain('http://www.example.com'));  
  
console.log(isDomain('https://www.example.com'));  
  
console.log(isDomain('www.example.com'));  
