console.log(capitalize('js string exercises'));
function capitalize(str) {
  var arr =str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i]=arr[i].split('').reduce(function (res,cur,i) {
      return i==0?cur.toUpperCase():res+cur;
    },"")
  }
  return arr.join(' ');
}