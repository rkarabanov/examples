x=window.prompt("Enter your string ");
var aeiou='aeiouAEIOU';
var count=0;
for (var i = 0; i < x.length; i++) {
	if(aeiou.indexOf(x[i])>-1){
		count++;
	}
}
window.alert(count);