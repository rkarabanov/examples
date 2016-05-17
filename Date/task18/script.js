function calculateAge(dateBirth) {  
	var date=new Date();
return new Date(0,date.getMonth(),date.getDate())<new Date(0,dateBirth.getMonth(),dateBirth.getDate())?date.getFullYear()-dateBirth.getFullYear()-1:date.getFullYear()-dateBirth.getFullYear();
        } 
  console.log(calculateAge(new Date(1995, 4, 15)));
   console.log(calculateAge(new Date(1995, 4, 16)));
  console.log(calculateAge(new Date(1995, 4, 17))); 