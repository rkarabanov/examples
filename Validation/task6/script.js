function isObject(value)  
        {  
        var datatype = typeof value;  
        return datatype === 'function' || datatype === 'object' && !!value;  
       }  
  
console.log(isObject({name: 'Robert'}));  
  
console.log(isObject('bar'));  
  
console.log(isObject(72));  