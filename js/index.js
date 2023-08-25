function showImage(imgId, imgSrc){

    const image = document.getElementById(imgId);
    const showImage = new Image();

    showImage.src = imgSrc;
    showImage.style.position = "absolute";
    showImage.style.width = 30 + "vw";
    showImage.style.top = 20 + "vh";
    showImage.style.left = 65 + "vw";
    showImage.style.opacity = 0;
    image.append(showImage);
    fadeIn(showImage);
    
}

function fadeIn(image){

    let opacity = 0.00

    const interval = setInterval(()=>{

        if(opacity >= 1){

            clearInterval(interval);
            return;

        }
        
        opacity = 0.01 + opacity

        image.style.opacity = opacity;

    }, 10)

}

function hideImage(imgId){

    const image = document.getElementById(imgId);
    while(image.childElementCount > 0){
        image.removeChild(image.lastChild);
    }

}