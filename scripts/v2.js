



const translate = document.querySelectorAll(".translate");
var watermark = document.querySelector(".hero-watermark");
//var skewedBg = document.querySelector(".skewed-bg");



window.addEventListener("scroll", () => {
   
    var scroll = window.pageYOffset;
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = "translateY(" + (scroll * speed) + "px)";
    });
    
//    skewedBg.style.transform = "translateY(" + (scroll * skewedBg.dataset.speed) + "px) skewY(-3deg)";
    watermark.style.transform = "translateY(" + (scroll * watermark.dataset.speed) + "px) translateX(-50%)";
    
});

//window.scrollBy({
//	top: -100,
//	behavior: "smooth"
//});

window.addEventListener("load", () => {
    document.getElementById("skewed-bg").classList.add("skewed-bg");
    document.getElementById("preloader").className = "preloader";
});