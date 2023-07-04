


function setLayout(layout){

    const width = window.innerWidth;
    const height = window.innerHeight;

    const boxLayout = document.getElementById(layout);

    if(width < height){

        boxLayout.style.flexDirection = "column";

    }
    else{

        boxLayout.style.flexDirection = "row";

    }

}
