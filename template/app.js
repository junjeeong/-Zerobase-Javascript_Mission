// do something!

window.addEventListener("DOMContentLoaded", (event) => {

    let body = document.querySelector(".preload");  
    body.style.visibility = "visible";
    document.querySelector("body").classList.remove("preload");

    const toggleBtn = document.querySelector('.toggle');
    const nav = document.querySelector('nav');
    let isNavOpen = false;

    toggleBtn.addEventListener("click", function(){
    isNavOpen = !isNavOpen;
    document.querySelector('main').style.transition = "all 0.5s";

    if (isNavOpen) {
        nav.classList.add('active');
        localStorage.setItem('isNavOpen', isNavOpen);
      } 
      else {
        nav.classList.remove('active');
        localStorage.setItem('isNavOpen', isNavOpen);
      }
    });
    const navState = localStorage.getItem('isNavOpen');
    if(navState !== null) {
      isNavOpen = JSON.parse(navState);
      if (isNavOpen) {
        nav.classList.add('active');
        document.querySelector(".toggle").style.transition ="none";
        document.querySelector('nav').style.transition = "none";
        document.querySelector('main').style.transition = "none";
      }
}
});