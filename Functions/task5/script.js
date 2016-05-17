x=window.prompt("Enter your string ");
x=x.split("");
for (var i = 0; i < x.length; i++) {
	if(i==0||x[i-1]==" "){x[i]=x[i].toUpperCase();
	}
}
window.alert(x.join(""));