var year1 = window.prompt("Input a Year#1 : ");
var year2 = window.prompt("Input a Year#2 : ");
var max=Math.max(year1,year2), min=Math.min(year1,year2);
for (var i = min; i <= max; i++) {
  	x = (i % 100 === 0) ? (i % 400 === 0) : (i % 4 === 0);
  	if(x){console.log(i);}
  } 