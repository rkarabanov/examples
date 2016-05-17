var field=new Array(2);
for (var i = 0; i < field.length; i++) {
	field[i]=document.createElement('div');
	document.getElementsByTagName('body')[0].appendChild(field[i]);
}
field[0].innerHTML="1st Number:";
field[1].innerHTML="2nd Number:";
var input_number=new Array(2);
for (var i = 0; i < input_number.length; i++) {
	input_number[i]=document.createElement('input');
	field[i].appendChild(input_number[i]);
}
var button=new Array(2);
for (var i = 0; i < button.length; i++) {
	button[i]=document.createElement('button');
	document.getElementsByTagName('body')[0].appendChild(button[i]);
	}
	button[0].innerHTML="Multiply";
	button[1].innerHTML="Devide";

var result=document.createElement('div');
result.innerHTML="";
button[0].onclick=function () {
	if(result.innerHTML==""){
		document.getElementsByTagName('body')[0].appendChild(result);
	}
	result.innerHTML="The Result is : ";
		result.innerHTML+=+(input_number[0].value*input_number[1].value);
}
button[1].onclick=function () {
	if(result.innerHTML==""){
		document.getElementsByTagName('body')[0].appendChild(result);
	}
	result.innerHTML="The Result is : ";
		result.innerHTML+=+(input_number[0].value/input_number[1].value);
}