function numStringRange(start,end,num) {
	  var range = [];  
	  if (end < start) {  
        num = -num;  
    }  
    if (typeof start == "number") {  
  
        while (num > 0 ? end >= start : end <= start) {  
            range.push(start);  
            start += num;  
        }  
        }   
      else if (typeof start == "string") {  
  
        start = start.charCodeAt(0);  
        end = end.charCodeAt(0);  
  
        while (num > 0 ? end >= start : end <= start) {  
            range.push(String.fromCharCode(start));  
            start += num;  
        }  
  
    } 
     return range;  
}

console.log(numStringRange('a', "z", 2));  
console.log(numStringRange("Z", "A", 2));  
console.log(numStringRange(0, -5, 1));  
console.log(numStringRange(0, 25, 5));  
console.log(numStringRange(20, 5, 5)); 