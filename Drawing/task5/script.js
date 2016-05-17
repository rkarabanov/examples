function drow() {
	  var canvas = document.getElementById('canvas');  
  if (canvas.getContext) {  
    var ctx  = canvas.getContext('2d');  
  //	ctx.strokeStyle = "red";
	var X = canvas.width / 2;  
	var Y = canvas.height / 2;  
	var R = 45;  
	ctx.beginPath();  
	ctx.arc(X, Y, R, 0, 2 * Math.PI);  
	ctx.lineWidth = 3;
	ctx.stroke();
	ctx.beginPath();
	  ctx.arc(X, Y, R/2, 0, 2 * Math.PI/2); 
	  ctx.lineWidth = 3;
	ctx.stroke(); 
	ctx.beginPath();
	  ctx.arc(X*4/5, Y*3/4, R/5, 0, 2 * Math.PI); 
	  ctx.lineWidth = 2;
	ctx.stroke(); 
		ctx.beginPath();
	  ctx.arc(X*5/4, Y*3/4, R/5, 0, 2 * Math.PI); 
	  ctx.lineWidth = 2;
	  ctx.lineTo(X*4/6, Y*3/4);
	ctx.stroke(); 
  }  
}