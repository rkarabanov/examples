function longestCountryName(country)  
  {  

  return country.reduce(function(lname, country)   
  {  
    return lname.length > country.length ? lname : country;  
  }, 
"");  
}  
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));