console.log(remove([58, '', 'abcd', true, null, false, 0]));  
function remove(array) {
var result=[];
for (var i = 0; i < array.length; i++) {
  if(array[i]){result.push(array[i]);}
}
return result; 
}