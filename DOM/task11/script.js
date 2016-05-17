function displayRandomImage() {
  var theImages = [{  
        src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",  
        width: "240",  
        height: "160"  
    }, {  
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",  
        width: "320",  
        height: "195"  
    }, {  
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",  
        width: "500",  
        height: "343"  
    }]; 
var rand=Math.floor(Math.random()*theImages.length)
var preBuffer;
preBuffer = new Image();  
        preBuffer.src = theImages[rand].src;  
        preBuffer.width = theImages[rand].width;  
        preBuffer.height = theImages[rand].height; 
var images = document.getElementsByTagName('img');  
var l = images.length;  
for (var p = 0; p < l; p++) {  
    images[0].parentNode.removeChild(images[0]);  
}  
document.body.appendChild(preBuffer);

}
