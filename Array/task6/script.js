console.log(string(127847126412));
function string(num) {
	var str='';
	var flag =false;
	var str1=""+num+"";
	for (var i = num.toString().length-1; i >= 0; i--) {
	var surplus= num%10;
	if(flag &&surplus%2==0){str=surplus+"-"+str;}
	else if(!flag&&surplus%2==0){flag=true;str=surplus+str;}
	else{ flag=false;str=surplus+str;}
	num=(num-surplus)/10;
	}
	return	str;
}