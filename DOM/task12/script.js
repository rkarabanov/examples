function highlight() {
	bold=document.getElementsByTagName('strong');
	for (var i = 0; i < bold.length; i++) {
		bold[i].style.color='green';
	}
}
function return_normal() {
	bold=document.getElementsByTagName('strong');
	for (var i = 0; i < bold.length; i++) {
		bold[i].style.color='black';
	}
}
