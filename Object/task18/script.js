function isDOMElement(obj) {  
    return !!(obj && obj.nodeType === 1);  
  }  
console.log(isDOMElement(document.getElementsByTagName('body')[0]));  