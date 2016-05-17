console.log(perfect_number(44));
console.log(perfect_number(8128));
console.log(perfect_number(128));
console.log(perfect_number(28));
function perfect_number(num) {
var sumDivisors=0;
for (var i = 1; i <= num/2; i++) {
if(num%i==0){sumDivisors+=i;}
}
return num===sumDivisors? "Number is perfect":"Number isn't perfect";
}