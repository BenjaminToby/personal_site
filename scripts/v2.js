



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
    document.getElementById("hero-graphic-container").className = "hero-graphic-wrapper";
});







//##########################################################################################################

var targets = document.querySelector("#section-2");
var windowRect = {
    rootMargin: "0px 0px -400px 0px",
    delay: 100,
    trackVisibility: true,
};

var navColors = new IntersectionObserver(navColorFunction, windowRect);

function navColorFunction(entries, navColors) {
    
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.querySelector("header").style.color = "white";
            document.querySelector(".hero-graphic-wrapper").style.opacity = "0";
//            translate[3].dataset.speed = .2;
        } else {
            document.querySelector("header").style.color = "#222";
            document.querySelector(".hero-graphic-wrapper").style.opacity = "1";
        }
    });
}

navColors.observe(targets);


//##########################################################################################################

var scrollIntoViewItems = document.querySelectorAll(".scroll-into-view");

var windowRect2 = {
    rootMargin: "0px 0px -200px 0px",
};
var scrollIntoView = new IntersectionObserver(function(entries, scrollIntoView) {
    entries.forEach(entry => {
       if(entry.isIntersecting) {
           entry.target.classList.add("fade-in-bottom");
       }
    });
}, windowRect2);


scrollIntoViewItems.forEach(item => {
    scrollIntoView.observe(item);
});


//##########################################################################################################

//var sectionOneText = document.querySelector("#section-2");

var sectionOneIo = new IntersectionObserver(sect1Function, windowRect);

function sect1Function(entries, sectionOneIo) {
    
    entries.forEach(entry => {
        if(entry.isIntersecting) {
//            windowRect.thresholds = [0, 0.25, 0.5, 0.75, 1];
//            if (windowRect.thresholds < 0.25) {
//                translate[3].dataset.speed = .1;
//            } else if (windowRect.thresholds > 0.25 && windowRect.thresholds < 0.5) {
//                translate[3].dataset.speed = .2;
//            } else if (windowRect.thresholds > 0.5 && windowRect.thresholds < 1) {
//                translate[3].dataset.speed = .3;
//            }
            translate[4].dataset.speed = .2;
            translate[4].style.transition = "all 1.8s cubic-bezier( 0.39, 0.575, 0.565, 1 )";
        } else {
            translate[4].style.transition = "all 1.8s cubic-bezier( 0.39, 0.575, 0.565, 1 )";
            translate[4].dataset.speed = 0;
            setTimeout(()=> {translate[4].style.transition = "all .8s cubic-bezier( 0.39, 0.575, 0.565, 1 )";}, 1000);
        }
    });
}

sectionOneIo.observe(translate[4]);









