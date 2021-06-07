



const translate = document.querySelectorAll(".translate");
var watermark = document.querySelector(".hero-watermark");
//var skewedBg = document.querySelector(".skewed-bg");



window.addEventListener("scroll", () => {
   
    var scroll = window.pageYOffset;
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = "translateY(" + (scroll * speed) + "px)";
    });
    
    if(window.innerWidth < 500) {
        
        translate[0].style.transform = "translateY(" + (scroll * 0.1) + "px)";
    }
    
//    skewedBg.style.transform = "translateY(" + (scroll * skewedBg.dataset.speed) + "px) skewY(-3deg)";
    watermark.style.transform = "translateY(" + (scroll * watermark.dataset.speed) + "px) translateX(-50%)";
    
});

//window.scrollBy({
//	top: -100,
//	behavior: "smooth"
//});

window.addEventListener("load", () => {
    document.getElementById("skewed-bg-block").classList.add("skewed-bg");
    document.getElementById("preloader").className = "preloader";
    document.getElementById("hero-graphic-container").className = "hero-graphic-wrapper";
    document.getElementById("hero-text-controller").className = "hero-text-block";
    document.querySelector(".hero-text-wrapper > a").classList.add("scroll-into-view-intro-2");
    document.querySelector(".hero-watermark").classList.add("scroll-into-view-intro-2");
});







//##########################################################################################################

var targets = document.querySelectorAll(".menu-color-change");
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
            document.querySelector(".aside-header > a").style.color = "white";
//            translate[3].dataset.speed = .2;
        } else {
            document.querySelector("header").style.color = "#222";
            document.querySelector(".aside-header > a").style.color = "#222";
            document.querySelector(".hero-graphic-wrapper").style.opacity = "1";
        }
    });
}

targets.forEach(entry => {
    navColors.observe(entry);
});




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
            
            if(window.innerWidth > 800) {
                translate[4].dataset.speed = .2;
                translate[4].style.transition = "all 1.8s cubic-bezier( 0.39, 0.575, 0.565, 1 )";
            }            
            
        } else {
            if(window.innerWidth > 800) {  
                translate[4].style.transition = "all 1.8s cubic-bezier( 0.39, 0.575, 0.565, 1 )";
                translate[4].dataset.speed = 0;
                setTimeout(()=> {translate[4].style.transition = "all .8s cubic-bezier( 0.39, 0.575, 0.565, 1 )";}, 1000);
            }
        }
    });
}

sectionOneIo.observe(translate[4]);










//############################################################################## -- Hamburger

document.querySelector(".hamburger-wrapper").addEventListener("click", hamburgerMenuToggle);
var logo = document.querySelector("header > a");

let hc = 0;

function hamburgerMenuToggle() {
    if (hc == 0) {
        document.querySelector("nav").className = "nav-mobile";
        document.querySelector("#aside-heder-block").className = "aside-header-mobile";
        logo.style.color = "#222";
        document.querySelector(".aside-header-mobile > a:first-child").style.color = "#222";
    } else {
        document.querySelector("nav").className = "none";
        document.querySelector("#aside-heder-block").className = "aside-header";
        logo.style.color = "inherit";
        hc = -1;
    }   
    hc++;
}


window.addEventListener("resize", () => {
    if(window.innerWidth > 1200) {
        document.querySelector("nav").className = "none";
        document.querySelector("#aside-heder-block").className = "aside-header";
        hc = 0;
    }
});


document.querySelector(".hamburger-wrapper").onblur = () => {
    document.querySelector("nav").className = "none";
    document.querySelector("#aside-heder-block").className = "aside-header";
    hc = 0;
}









