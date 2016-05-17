function allKeys(obj) {
	var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
//но почему тогда Object.keys(obj)=[name]?
}

function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("Sara")));