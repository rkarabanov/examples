function Circle(r) {
	r=r||1;
	this.r=r;
}
var circle= new Circle(window.prompt("Your number:"));
Circle.prototype.sqrt
 = function() {
	return Math.PI*this.r*this.r;
};
Circle.prototype.perimeter = function() {
	return Math.PI*this.r*2;
};
console.log("S="+circle.sqrt()+" P="+circle.perimeter());