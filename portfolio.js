// window.addEventListener('scroll', () => {
//     document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// }, false);

function projectsGit(projname) {

    document.createElement

}

flag = 0;

function infoSlider(id, overlayId) {

    if (flag === 0) {
        document.getElementById(overlayId).style.height = '50%';
        document.getElementById(id).style.width = '250px';
        flag = 1;
    }
    else {
        document.getElementById(overlayId).style.height = '0';
        document.getElementById(id).style.width = '200px';
        flag = 0;
    }

}






