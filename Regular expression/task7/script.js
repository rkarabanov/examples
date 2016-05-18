function isIP(str)  
{  
		regexp = /^(((([1][0-9]{2})|(2[0-4][0-5])|(25[0-5])|([1-9][0-9])|([0-9])).){3})(([1][0-9]{2})|(2[0-4][0-5])|(25[0-5])|([1-9][0-9])|([0-9]))$/;
    
        if (regexp.test(str))  
          {  
            return true;  
          }  
        else  
          {  
            return false;  
          }  
}  
console.log(isIP('255.255.255.0'));  
console.log(isIP('255.255.255.256'));  