function valueLimit(val, min, max) {  
  return val < min ? min : (val > max ? max : val);  
}  
  
console.log(valueLimit(7, 1, 12));  
console.log(valueLimit(-7, 0, 12));  
console.log(valueLimit(15, 0, 12));  