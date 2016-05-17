function getFormvalue()  
{  
  var form1=document.getElementById("form1");  
  for (var i=0;i<form1.length;i++)  
  {  
   if (form1.elements[i].value!='Submit')  
    {    
      console.log(form1.elements[i].value);
      form1.elements[i].value="";  
     }    
   }  
}  