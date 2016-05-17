function  getOptions() {
var mySelect=document.getElementById("mySelect");
var options=document.getElementsByTagName('option');
var txt="No. of items : "+options.length+"\n";
for (var i = 0; i < options.length; i++) {
	txt+=options[i].innerHTML+"\n";
}
window.alert(txt);
}
