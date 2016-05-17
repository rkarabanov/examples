function Cylinder(height,diametr) {
	diametr=diametr||5;
	height=height||5;
	this.height=height;
	this.diametr=diametr;
}
Cylinder.prototype.volume = function() {
	return this.diametr*this.height*Math.PI;
};
var cyl =new Cylinder(7,3);
console.log("Volume: "+cyl.volume());