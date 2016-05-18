function vowelCount(str) {  
  
  return str.match(/[aeiou]/gi).length;  
  
}  
console.log(vowelCount('The quick brown fox jumps over the lazy dog'));