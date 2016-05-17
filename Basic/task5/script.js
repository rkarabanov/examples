var string=document.createElement('div');
string.innerHTML="w3resource ";
document.getElementsByTagName('body')[0].appendChild(string);
var text;
setInterval( function()
	{text =string.innerHTML;
string.innerHTML=text[text.length - 1] + text.substring(0, text.length - 1); 
},100);

 

