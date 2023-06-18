// window.addEventListener('scroll', () => {
//     document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// }, false);


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hamburger-menu").style.top = "60px";
  } else {
    document.getElementById("hamburger-menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}



