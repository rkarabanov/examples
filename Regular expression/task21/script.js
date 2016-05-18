function thousandsSeparators(num)  
  {  
    var num_parts = num.toString().split(".");  
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
    return num_parts.join(".");  
  }  
  
console.log(thousandsSeparators(1000));  
console.log(thousandsSeparators(10000.23));  
console.log(thousandsSeparators(100000)); 