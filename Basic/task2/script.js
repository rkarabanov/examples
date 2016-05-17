var instruction=document.createElement('div');

instruction.innerHTML="Click the button to print the current page.";
document.getElementsByTagName('body')[0].appendChild(instruction);
var button=document.createElement('button');
button.innerHTML="Print this page";
document.getElementsByTagName('body')[0].appendChild(button);
button.onclick=function print_this_page() {
	window.print();
}
