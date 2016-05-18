function isUrl(str)  
{  
        regexp=/^((http|https|ftp)\:\/\/|)www\.((\w|[-.]){1,})\w\.[a-z]{2,}?/;
        if (regexp.test(str))  
        {  
          return true;  
        }  
        else  
        {  
          return false;  
        }  
}  
  
console.log(isUrl("http://www.example.com"));  
console.log(isUrl("https://www.example.com"));  
console.log(isUrl("www.example.com"));  
console.log(isUrl("example.com"));  