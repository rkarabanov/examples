function minDate(array) {
return array.reduce(function (res,cur){return new Date(res)>new Date(cur)?cur:res;},array[0]);
}
console.log(minDate(['2015/02/01', '2015/02/02', '2015/01/03']));