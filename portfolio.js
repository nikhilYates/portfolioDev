// window.addEventListener('scroll', () => {
//     document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// }, false);

function projectsGit(projname) {

    document.createElement

}

flag = 0;

function infoSlider(id, overlayId) {

    if (flag === 0) {
        document.getElementById(overlayId).style.height = '100%';
        document.getElementById(id).style.width = '250px';
        flag = 1;
    }
    else {
        document.getElementById(overlayId).style.height = '0';
        document.getElementById(id).style.width = '200px';
        flag = 0;
    }


}

flagOne = 0
function vdaySlider(id, overlayId) {
    if (flagOne === 0) {
        document.getElementById(overlayId).style.height = '100%';
        document.getElementById(id).style.width = '100%';
        flagOne = 1;
    }
    else {
        document.getElementById(overlayId).style.height = '0';
        document.getElementById(id).style.width = '100%';
        flagOne = 0;
    }
}


document.addEventListener('click', function(e) {
    if(!document.getElementById("hamburger-input").contains(e.target) && !document.getElementById("sidebar-menu").contains(e.target)) {
        console.log("reached inner");
        document.getElementById("sidebar-menu").style.right = '-250px';
        document.getElementById("sidebar-menu").style.visibility = 'hidden';  
        document.getElementById("scroll2").style.opacity = '100%';
        document.getElementById("scroll1").style.opacity = '100%';
        document.getElementById("about-resume").style.opacity = '100%';
        document.getElementById("scroll4").style.opacity = '100%'; 
    }
})


function hideNav() {

    document.getElementById("sidebar-menu").style.right = '-250px';
    document.getElementById("sidebar-menu").style.visibility = 'hidden';
    document.getElementById("hamburger-input").checked = false;
    document.getElementById("scroll2").style.opacity = '100%';
    document.getElementById("scroll1").style.opacity = '100%';
    document.getElementById("about-resume").style.opacity = '100%';
    document.getElementById("scroll4").style.opacity = '100%';

}


function openNav() {
    document.getElementById("sidebar-menu").style.right = '0';
    document.getElementById("sidebar-menu").style.visibility = 'visible';
    document.getElementById("scroll2").style.opacity = '50%';
    document.getElementById("scroll1").style.opacity = '50%';
    document.getElementById("about-resume").style.opacity = '50%';
    document.getElementById("scroll4").style.opacity = '50%';
}

  document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('.robot-video');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.5 }); // threshold: 0.5 means at least 50% of the video must be visible for it to play

    videos.forEach(video => {
      observer.observe(video);
    });
  });






