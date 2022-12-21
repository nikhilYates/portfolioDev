let i = 1;
newSlide(i);

// to go back and forth between slides

function post(n) {
    newSlide(i += n);
}

function curr(n) {
    newSlide(i = n);
}


function showAll(n) {

    let p;
    let slides = document.getElementsByClassName("slides");
    for (p = 0; p < slides.length; p++) {

        slides[p].style.display = "none";
    }
    i++;
    if(i > slides.length) {
        i = 1;
    }
    slides[i-1].style.display = "block";
    
}

