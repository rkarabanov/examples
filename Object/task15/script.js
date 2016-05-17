function allValues(obj) {  
    var keys = _keys(obj);  
    var length = keys.length;  
    var values = Array(length);  
    for (var i = 0; i < length; i++) {  
      values[i] = [keys[i],obj[keys[i]]];  
    }  
    return values;  
  }  
function _keys(obj)   
 {   if (Object.keys) return Object.keys(obj);  
    var keys = [];  
    for (var key in obj) if (_.has(obj, key)) keys.push(key);  
    return keys;  
  }  
 
console.log(allValues({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));