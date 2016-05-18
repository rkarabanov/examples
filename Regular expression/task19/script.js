function is_html(str)  
{  
 regexp = /^<([a-z]+)([0-9]+|)>(\w|)<\/([a-z]+)([0-9]+|)>$/g;  
    
        if (regexp.test(str))  
          {  
            return true;  
          }  
        else  
          {  
            return false;  
          }  
}  
  
console.log(is_html('<br></br>'));  
  
console.log(is_html(''));  
  
console.log(is_html('.selector'));