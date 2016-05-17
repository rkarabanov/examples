var field=new Array(2);
for (var i = 0; i < field.length; i++) {
	field[i]=document.createElement('div');
	document.getElementsByTagName('body')[0].appendChild(field[i]);
}
field[0].innerHTML="Fahrenheit:";
field[1].innerHTML="Celsius:";
var input_number=new Array(2);
for (var i = 0; i < input_number.length; i++) {
	input_number[i]=document.createElement('input');
	field[i].appendChild(input_number[i]);
	input_number[i].style.marginLeft="10px";
	input_number[i].style.size="150";
}
var button=new Array(2);
for (var i = 0; i < button.length; i++) {
	button[i]=document.createElement('button');
	document.getElementsByTagName('body')[0].appendChild(button[i]);
	button[i].style.margin="10px";
	}
	button[0].innerHTML="to Celsius";
	button[1].innerHTML="to Fahrenheit";
button[0].onclick=function () {
input_number[0].value=(input_number[1].value-32)/1.8;
}
button[1].onclick=function () {
input_number[1].value=(input_number[0].value*1.8)+32;
}