
function volumeSphere()  
 {  
  var volume;  
  var radius = document.getElementById('radius').value;
  console.log(radius);  
  radius = Math.abs(radius);  
  volume = (4/3) * Math.PI * Math.pow(radius, 3).toFixed(4);
  document.getElementById('volume').value = volume;
   }