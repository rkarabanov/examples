function detect_data_type(value)  
{  
var types = [Function, RegExp, Number, String, Boolean, Object];  
      
if (typeof value === "object" || typeof value === "function")   
    {  
     for (var x = 0; x < types.length; x++)   
     {  
            if (value instanceof types[x])  
            {  
                return types[x];  
            }  
      }  
    }  
      
    return typeof value;  
}  
function function_name() {
	return 66;
}
console.log(detect_data_type(12));  
console.log(detect_data_type('w3resource'));  
console.log(detect_data_type(false));  
console.log(detect_data_type(null));  
console.log(detect_data_type(function_name()));  