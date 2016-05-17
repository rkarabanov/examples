function longestSubstring(string)  
  {  

  return string.split(' ').reduce(function(lstring, string)   
  {  
    return lstring.length > string.length ? lstring : string;  
  }, 
"");  
}  
console.log(longestSubstring("United States of America USA"));
