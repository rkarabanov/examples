function escapeHtml(str) {  
    
 if ((str===null) || (str===''))  
       return false;  
 else  
   str = str.toString();  
    
  var map = {  
    '&': '&amp;',  
    '<': '&lt;',  
    '>': '&gt;',  
    '"': '&quot;',  
    "'": '&#039;'  
  };  
  
  return str.replace(/[&<>"']/g, function(m) { return map[m]; });  
}  
console.log(escapeHtml('PHP & MySQL'));  
console.log(escapeHtml('3 > 2'));  