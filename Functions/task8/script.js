var a=7,b=312,c=6217;
number_function(a);
number_function(b);
number_function(c);

function number_function(x) {
	for (var i = 2; i < x/2; i++) {
	if(x%i==0){return	window.alert(x+" is not prime ");}
		}
		return window.alert(x+" is prime");
	}