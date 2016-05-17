var array=[2,-7,5];
window.alert(conditionalSort(array));
function conditionalSort(array) {
	var x=array[0];  
	var y=array[1];  
	var z=array[2];  
	if (x>y && x>z)  
{  
        if (y>z)  
        {  
            return(x + ", " + y + ", " +z);  
        }  
        else  
        {  
            return(x + ", " + z + ", " +y);  
        }  
}  
else if (y>x && y >z)  
{  
        if (x>z)  
        {  
             return(y + ", " + x + ", " +z);  
        }  
        else  
        {  
             return(y + ", " + z + ", " +x);  
        }  
}  
else 
{  
        if (x>y)  
        {  
            return(z + ", " + x + ", " +y);  
        }  
        else  
        {  
            return(z + ", " + y + ", " +x);  
        }  
}
}