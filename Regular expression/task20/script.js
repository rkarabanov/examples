function is_html(str)  
{  
 regexp = /^[0-9a-z_\-]+$/;  
    
        if (regexp.test(str))  
          {  
            return true;  
          }  
        else  
          {  
            return false;  
          }  
}  
  

console.log(is_html(''));  
console.log(is_html('_selectorA-33'));
console.log(is_html('_selector-33'));