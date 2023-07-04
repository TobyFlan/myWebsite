

function setLayout(layout){

    const width = window.innerWidth;
    const height = window.innerHeight;

    const boxLayout = document.getElementById(layout);

    if(width < height){

        boxLayout.style.flexDirection = "column";
        boxLayout.style.top = 0 + "vh";

    }
    else{

        boxLayout.style.flexDirection = "row";
        boxLayout.style.top = 20 + "vh";

    }

}
