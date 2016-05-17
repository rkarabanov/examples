function substrings(array1,num)  
{  
  
var combi = [];  
var temp= "";  
var slent = Math.pow(2, array1.length);  
  
for (var i = 0; i < slent ; i++)  
{  
    temp= [];  
    for (var j=0;j<array1.length;j++) {  
        if ((i & Math.pow(2,j))){   
            temp.push(array1[j]);  
        }  
    }  
    if (temp !== ""&& temp.length>=num)  
    {  
        combi.push(temp);  
    }  
}  
//if(){}
  return combi;  
}
  
  
console.log(substrings([1,2,3,4],3));  