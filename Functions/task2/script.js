palindrome(window.prompt("Enter your string to checking"));
function palindrome(x)
{if(x==x.split("").reverse().join(""))
 {window.alert("The entry is a palindrome.");} else {
	window.alert("The entry is not a palindrome.");
}}