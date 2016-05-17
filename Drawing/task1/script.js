function rect() {
	  var canvas = document.getElementById('canvas');  
  if (canvas.getContext) {  
    var ctx  = canvas.getContext('2d');  
  
    ctx.fillRect(20,20,100,100);  
    ctx.clearRect(40,40,60,60);
    ctx.strokeRect(45,45,50,50);  
  }  
}