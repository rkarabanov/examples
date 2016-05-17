function maxDate(array) {
return array.reduce(function (res,cur){return new Date(res)<new Date(cur)?cur:res;},null);
}
console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));