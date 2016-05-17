function isJson(value)  
        {  
        return toString.call(value) === '[object Object]';  
        }  
  
console.log(isJson({name: 'Robert'}));  
  
console.log(isJson('bar'));  
  
console.log(isJson(72));  