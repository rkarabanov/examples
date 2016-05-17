function ISOnumericDate(date) {
return date.getDay()==0? 7:date.getDay()+1;
}
dt = new Date(2015, 10, 1); 
console.log(ISOnumericDate(dt));