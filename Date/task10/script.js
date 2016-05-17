function yesterday(date1) {
 dt1=new Date(date1);
  return new Date(dt1.setDate(dt1.getDate()-1));
}
console.log(yesterday('Nov 15, 2014')); 
console.log(yesterday('Nov 16, 2015')); 
console.log(yesterday('Nov 17, 2016'));