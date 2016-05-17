function swapCharacter(str) {
  var str1='';
  for (var i = 0; i < str.length; i++) {
    str1+= str[i]==str[i].toUpperCase()?
    str[i].toLowerCase():str[i].toUpperCase();
  }
  return str1;
}
console.log(swapCharacter('The Quick Brown Fox'));
console.log(swapCharacter('tHE qUICK bROWN fOX'));