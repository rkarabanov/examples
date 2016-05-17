var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];  

averageMark(students);
function averageMark(students) {
	var mark=0;
	for (var i = 0; i < students.length; i++) {
		mark+=students[i][1];
	}
	var aMark= mark/students.length;
	console.log("Average grade: " +aMark);
	grade(aMark);
}
function grade(mark) {
	 if (mark < 60){  
          console.log("Grade : F");        
          }   
        else if (mark < 70) {  
                console.log("Grade : D");   
                  }   
        else if (mark < 80)   
             {  
                console.log("Grade : C");   
        } 
        else if (mark < 90) {  
                console.log("Grade : B");   
        } 
        else  {  
                console.log("Grade : A");  
            }
}