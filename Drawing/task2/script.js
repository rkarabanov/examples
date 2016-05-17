function circle() {
	  var canvas = document.getElementById('canvas');  
  if (canvas.getContext) {  
    var ctx  = canvas.getContext('2d');  
  	ctx.strokeStyle = "red";
	var X = canvas.width / 2;  
	var Y = canvas.height / 2;  
	var R = 45;  
	ctx.beginPath();  
	ctx.arc(X, Y, R, 0, 2 * Math.PI);  
	ctx.lineWidth = 3;
	ctx.stroke();  
  }  
}