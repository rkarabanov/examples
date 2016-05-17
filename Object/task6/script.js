Array.prototype.bubbleSort = function() {
	var flag= false;
	while(!flag){
		flag=true;
		for (var i = 0; i < this.length-1; i++) {
		if (this[i] > this[i+1]){  
        var x = this[i+1];  
        this[i+1] = this[i];  
        this[i] = x;  
        flag = false;
		}
	}
}
	return this;

};
console.log([6,4,0, 3,-2,1].bubbleSort());