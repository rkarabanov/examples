function stripHtmlTags(str)  
{  
   if ((str===null) || (str===''))  
       return false;  
  else  
   str = str.toString();  
  return str.replace(/<[^>]*>/g, '');  
}  
  
console.log(stripHtmlTags('<p><strong><em>PHP Exercises</em></strong></p>'));  