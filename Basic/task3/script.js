var day=new Date();
string(day.getDate(),day.getMonth()+1,day.getFullYear(),'-');
string(day.getDate(),day.getMonth()+1,day.getFullYear(),'/');
string(day.getMonth()+1,day.getDate(),day.getFullYear(),'-');
string(day.getMonth()+1,day.getDate(),day.getFullYear(),'/');
function string(a,b,c,sign) {
	a= needLenghth(a,2);
	b= needLenghth(b,2);
	c= needLenghth(c,4);
	console.log(a+sign+b+sign+c);
}
function needLenghth(a, size) {
	a=a+'';
	while(size > a.length) {
		a='0'+a;
	}
	return a;
}