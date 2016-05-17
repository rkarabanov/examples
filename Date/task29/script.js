function sortYear(num) {
  return dt.getFullYear()%100;
}
dt = new Date(1989, 10, 1); 
console.log(sortYear(dt));