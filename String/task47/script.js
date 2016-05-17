function endsWith(str, substr)  
 {  
  return str.indexOf(substr)===str.length-substr.length;  
}  
console.log(endsWith('js string exercises', 'exercises'));