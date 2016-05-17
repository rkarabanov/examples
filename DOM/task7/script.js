function createTable()  
{  
rn = window.prompt("Input number of rows", 1);  
cn = window.prompt("Input number of columns",1); 
myTable=document.getElementById('myTable');
for (var i = 0; i < rn; i++) {
	var r=myTable.insertRow();
	for (var j = 0; j < cn; j++) {
		r.insertCell().innerHTML="Row-"+(i+1)+" Column-"+(j+1);
	}
}
}
