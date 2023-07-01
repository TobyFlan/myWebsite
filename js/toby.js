function showContent(content, setHeight){

    console.log("was clicked!")

    const data = document.getElementById(content);


    //must know if it needs to grow or shrink on click using zindex as a storage variable
    if(data.style.zIndex == 0){ //must be grown

        let height = 0;

        const interval = setInterval(()=>{
    
            if(height >= setHeight){
    
                data.style.zIndex = 10;
    
                clearInterval(interval);
                return;
    
            }
    
            height = 1 + height;
    
            console.log(height);
    
            data.style.height = height + "vh";            
    
        }, 10);

    }

    else{    //else, we shrink it out of view

        let height = setHeight;

        const interval = setInterval(()=>{
    
            if(height <= 0){
    
                data.style.zIndex = 0;
                clearInterval(interval);
                return;
    
            }
    
            height = height - 1;
    
            console.log(height);
    
            data.style.height = height + "vh";
    
        }, 10);

    }

}