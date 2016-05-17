function function_name() {
	return arguments.callee.name;
}
console.log(function_name());