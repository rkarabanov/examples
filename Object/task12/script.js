function parse_URL(url) {  
    var a = document.createElement('a');  
    a.href = url;  
    return  [a.protocol,
a.host,     
a.hostname, 
a.port,     
a.pathname,
a.hash,    
a.search,   
a.origin,]  
      ;
}  
  
console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python')); 