function stringEndsWith(str, suffix)   
{  
   
 if (((str===null) || (str==='')) || ((suffix===null) || (suffix==='')))  
   {  
    return false;  
   }  
 
 return str.indexOf(suffix, str.length-suffix.length) !== -1;  
}  
  
console.log(stringEndsWith('JS PHP PYTHON','PYTHON'));  
  
console.log(stringEndsWith('JS PHP PYTHON',''));  