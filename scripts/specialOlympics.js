let myImage = document.querySelector('img');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/basketball.jpg') {
      myImage.setAttribute('src','images/bowling.jpg');
    } else if(mySrc === 'images/bowling.jpg') {
      myImage.setAttribute('src','images/yoga.jpg');
    }else if(mySrc === 'images/yoga.jpg'){
      myImage.setAttribute('src','images/track.jpg');
    }else {
      myImage.setAttribute('src','images/basketball.jpg');
    } 
}

