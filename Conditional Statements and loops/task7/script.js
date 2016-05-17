function fizzBuzz() {
	for (var i = 1, result=''; i <= 100; i++) {
result=i+" ";
		if(i%3==0){result+="Fizz";}
		if(i%5==0){result+="Buzz";}
		console.log(result);
	}
}
 fizzBuzz();

