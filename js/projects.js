

function setLayout(){

    const width = window.innerWidth;

    console.log("current width = " + width);

    const images = documents.querySelectorAll('project-image-wide');
    const headers = documents.querySelectorAll('project-header-wide');
    const maintexts = documents.querySelectorAll('project-text-wide');


    images.forEach((img) => {

        if(width < 740){

            img.classList.add("project-image-slim");

        }
        else{

            img.classList.remove("project-image-slim");

        }

    });


    headers.forEach((img) => {

        if(width < 740){

            img.classList.add("project-header-slim");

        }
        else{

            img.classList.remove("project-header-slim");

        }

    });

    maintexts.forEach((img) => {

        if(width < 740){

            img.classList.add("project-text-slim");

        }
        else{

            img.classList.remove("project-text-slim");

        }

    });

}


window.addEventListener('resize', setLayout);