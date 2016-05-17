console.log(swapcase('AaBbc'));
function swapcase(str) {
  var arr =str.split('');
  for (var i = 0; i < arr.length; i++) {
    arr[i]=arr[i].toUpperCase()==arr[i]? arr[i].toLowerCase():arr[i].toUpperCase();
  }
  return arr.join('');
}