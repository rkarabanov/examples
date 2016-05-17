var array=[];
var field=document.createElement('div');
	document.getElementsByTagName('body')[0].appendChild(field);
field.innerHTML="Number:";
var input_number=document.createElement('input');
	field.appendChild(input_number);
var button=new Array(2);
for (var i = 0; i < button.length; i++) {
	button[i]=document.createElement('button');
	document.getElementsByTagName('body')[0].appendChild(button[i]);
	button[i].style.margin="5px";
	}
	button[0].innerHTML="Add";
	button[1].innerHTML="Display";

var result=document.createElement('div');
result.innerHTML="";
button[0].onclick=function () {
	array.push(input_number.value);
window.alert("Element #"+(array.length-1)+" = "+array[array.length-1]);
input_number.value="";
	}
button[1].onclick=function () {
	if(result.innerHTML==""){
		document.getElementsByTagName('body')[0].appendChild(result);
	}
	result.innerHTML="--------------- \n";
	for (var i = 0; i < array.length; i++) {
		result.innerHTML+="Element #"+i+" = "+array[i]+"\n";
	}
		
}