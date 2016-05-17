console.log(humanize()); 
console.log(humanize(1)); 
console.log(humanize(8)); 
console.log(humanize(301)); 
console.log(humanize(402)); 
function humanize(n) {  
	if(n==null) return null;  
            n+=  n%10==1? 'st':
            (n%10==2?'nd':(n%10==3?'rd':"th"))
     return  n;  
        }  