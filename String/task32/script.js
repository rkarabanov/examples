function removeNonAscii(str) {  
    
  if ((str===null) || (str===''))  
       return false;  
 
  return str.replace(/[^\x20-\x7E]/g, '');  
}  
  
console.log(removeNonAscii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ')); 