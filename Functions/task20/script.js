console.log(randomString(8));
function randomString(n) {
	var text = "";  
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  
for(var i=0; i < n; i++ )  
{    
text += char_list.charAt(Math.floor(Math.random() * char_list.length));  
} 
return text;
}
