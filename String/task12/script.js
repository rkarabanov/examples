console.log(uncamelize('helloWorld')); 
console.log(uncamelize('helloWorld','-')); 
console.log(uncamelize('helloWorld','_'));
function uncamelize(str,char) {
	char=char||" ";
	return str.split('').reduce(function (res,cur) {
      return cur==cur.toUpperCase()? res+char+cur.toLowerCase():res+cur;
    },"");
}