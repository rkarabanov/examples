function guid(len) {  
        var buf = [] ; 
       var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  
       var charlen = chars.length;  
       var length = len || 32;  
              
        for (var i = 0; i < length; i++) {  
            buf[i] = chars.charAt(Math.floor(Math.random() * charlen));  
        }  
          
        return buf.join('');  
    }  
  
console.log(guid());    
console.log(guid(15));