function printArray(array) {
for (var i = 0; i < array.length; i++) {
  console.log("row "+i);
  for (var j = 0; j < array[i].length; j++) {
    console.log(array[i][j]);
  }
}
}
printArray( [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);