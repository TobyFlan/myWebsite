function showImage(imgId, imgSrc){

    console.log("Mouse is over text");
    console.log("\tImgID = " + imgId + " Image URL = " + imgSrc);

    const image = document.getElementById(imgId);
    const showImage = new Image();

    showImage.src = imgSrc;
    showImage.style.position = "absolute";
    showImage.style.width = 30 + "vw";
    showImage.style.top = 20 + "vh";
    showImage.style.left = 65 + "vw";
    image.append(showImage);
    
}

function hideImage(imgId){

    console.log("moise is off text");
    const image = document.getElementById(imgId);
    while(image.childElementCount > 0){
        image.removeChild(image.lastChild);
    }

}