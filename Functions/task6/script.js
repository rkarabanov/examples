x=window.prompt("Enter your string ");
x=x.split(" ");
var longestWorld=x[0];
for (var i = 1; i < x.length; i++) {
	if(x[i].length>longestWorld.length){longestWorld=x[i];}
}
window.alert(longestWorld);