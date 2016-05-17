function rect() {
	  var canvas = document.getElementById('canvas');  
  if (canvas.getContext) {  
    var ctx  = canvas.getContext('2d');  
  
       ctx.fillStyle = "rgb(256,0,0)";  
       ctx.fillRect (15, 10, 50, 50);  
          
       ctx.fillStyle = "rgba(0, 0, 200, 0.6)";  
       ctx.fillRect (35, 30, 50, 5f0);  
  }  
}