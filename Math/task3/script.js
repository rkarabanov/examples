function convert(number, char) {  
   var change=2;
    if (char==='H') {change=16;}
    else if(char==='O'){change=8;}
    return number.toString(change);  
}  
  
console.log(convert(120,'B'));
console.log(convert(120,'H'));
console.log(convert(120,'O'));
