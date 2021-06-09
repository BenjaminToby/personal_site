




//############################################# -- Intro Animations

const heroTextSection = document.querySelector(".hero-section > div:nth-child(2)");
const myImageBlock = document.querySelector(".benjamin-image-block");
const myBigTextBlock = document.querySelector(".benjamin-big-text-block");
const mainTextBlock = document.querySelector(".main-text-block");
const mainCTA = document.querySelector(".main-cta-button");
const allHeaderElements = document.querySelectorAll("header *");


function intro() {
    
    anime({
        targets: heroTextSection,
        width: [0, "50%"],
        opacity: [0, 1],
        easing: "cubicBezier(0, 0.72, 0.355, 1)",
        duration: 800,
        delay: 1400,
    });
    
    anime({
        targets: allHeaderElements,
        translateX: [-20, 0],
//        rotateY: [50, 0],
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 800,
        delay: anime.stagger(100, {start: 1000}/* , {easing: 'easeOutQuad'} */),
    });
    
    anime({
        targets: myBigTextBlock,
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "cubicBezier( 0.1, 0.63, 0.355, 1 )",
        duration: 1200,
        delay: 2000,
    });
    
    anime({
        targets: myImageBlock,
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "cubicBezier( 0.1, 0.63, 0.355, 1 )",
        duration: 1500,
        delay: 2200,
    });
    
    anime({
        targets: mainTextBlock,
        translateX: [-50, 0],
        opacity: [0, 1],
        easing: "cubicBezier( 0.1, 0.63, 0.355, 1 )",
        duration: 800,
        delay: 2800,
    });
    
    anime({
        targets: mainCTA,
        translateX: [-50, 0],
        opacity: [0, 1],
        easing: "cubicBezier( 0.1, 0.63, 0.355, 1 )",
        duration: 800,
        delay: 2900,
    });
    
}

intro();





//############################################# -- Header Scroll interactions

var headerController = document.querySelector("#header-controller");
var windowRect = {
    rootMargin: "0px",
};

var headerObserver = new IntersectionObserver(changeHeader, windowRect);

function changeHeader(entry) {
    
    if(entry[0].isIntersecting) {
        document.querySelector("header").className = "none";
        anime({
            targets: "header img",
            width: 40,
            height: 100,
            top: 0,
            duration: 400,
            easing: "easeOutCubic",
        });
        
        anime({
            targets: "header > a > div",
            translateX: 0,
            opacity: 1,
            duration: 1000,
        });
        
    } else {
        document.querySelector("header").classList.add("scrolled");
        anime({
            targets: "header img",
            width: 60,
            height: 130,
            top: 20,
            duration: 400,
            easing: "easeOutCubic",
        });
        
        anime({
            targets: "header > a > div",
            translateX: -50,
            opacity: 0,
            duration: 1000,
        });
    }
}

setTimeout(() => {
    headerObserver.observe(headerController);
}, 2000);















