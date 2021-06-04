



const translate = document.querySelectorAll(".translate");
var watermark = document.querySelector(".hero-watermark");
var skewedBg = document.querySelector(".skewed-bg");



window.addEventListener("scroll", () => {
   
    var scroll = window.pageYOffset;
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = "translateY(" + (scroll * speed) + "px)";
    });
    
});