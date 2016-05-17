console.log(caseInsensitiveSearch('JavaScript Exercises', 'exercises')); 
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercises')); 
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercisess'));
function caseInsensitiveSearch(str,substr) {
return (str.toLowerCase().indexOf(substr.toLowerCase())>-1);
}
