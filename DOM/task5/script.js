function insert_Row() {  
 newRow=document.getElementById('sampleTable').insertRow(0);
 for (var i = 0; i < 2; i++) {
 	newRow.insertCell(i).innerHTML="Sometext";
 }
 }  
