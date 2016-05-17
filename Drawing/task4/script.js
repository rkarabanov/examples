function triangle()   
{  
  var canvas = document.getElementById('canvas');  
  if (canvas.getContext)  
  {  
    var ctx = canvas.getContext('2d');  
  
    ctx.beginPath();  
    ctx.moveTo(75,75);  
    ctx.lineTo(10,75);  
    ctx.lineTo(10,25);
   // ctx.lineTo(20,50)
   //ctx.stroke();  
    ctx.fill();  
  }  
}  