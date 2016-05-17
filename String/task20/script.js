function formattedString(pad, userStr, padPos)  
{  
  if (typeof userStr === 'undefined')   
    return pad;  
  if (padPos == 'l')  
     {  
     return (pad + userStr).slice(-pad.length);  
     }  
  else   
    {  
    return (userStr + pad).substring(0, pad.length);  
    }  
}  
console.log(formattedString('0000',123,'l'));  
console.log(formattedString('00000000',123,''));  