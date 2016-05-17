body= document.getElementsByTagName("body")[0]; 
bodyElements=body.getElementsByTagName("p");
function set_background() { 
for (var i = 0; i < bodyElements.length; i++) {
	bodyElements[i].style.backgroundColor=rgbRandom();
}
}  
function rgbRandom() {
	return "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
}

