function unCapitalizeWords(str1){  
return	str1.split(' ').reduce(function(res,cur){return res+cur[0].toLowerCase() + cur.slice(1)+" ";},"").trim();

}  
console.log(unCapitalizeWords('Js String ExerCises'));