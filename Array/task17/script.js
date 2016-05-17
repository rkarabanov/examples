console.log(shuffle([1,2,3]));  
console.log(shuffle([1,2,223,3,821,2187]));
function shuffle(array) {
  for (var i = 0; i < array.length; i++) {
  	var rand=Math.floor((Math.random() * (array.length-1)));
  	var buffer =array[i];
  	array[i]=array[rand];
  	array[rand]=buffer;
  }
  return array;
  }  