function longestPalindrome(string)  
  {  

  return string.split(' ').reduce(function(lstring, curr)   
  {  
    return ((lstring.length < curr.length) && (curr==curr.split("").reverse().join("")))? curr:lstring ;
  }, 
"");  
}  
console.log(longestPalindrome("United States gog of America ikikiki USA"));