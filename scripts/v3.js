




//############################################# -- Intro Animations

const heroTextSection = document.querySelector(".hero-section > div:nth-child(2)");
const myImageBlock = document.querySelector(".benjamin-image-block");
const myBigTextBlock = document.querySelector(".benjamin-big-text-block");
const mainTextBlock = document.querySelector(".main-text-block");
const mainCTA = document.querySelector(".main-cta-button");
const allHeaderElements = document.querySelectorAll("header *");
const mountains = document.querySelectorAll("#mountains");
const clouds = document.querySelectorAll("#clouds");


function intro() {
    
    anime({
        targets: heroTextSection,
        width: [0, "50%"],
        translateX: [200, 0],
        easing: "cubicBezier( 0.93, 0, 0.09, 1 )",
        duration: 1500,
        delay: 1000,
    });
    
    anime({
        targets: allHeaderElements,
        translateX: [-20, 0],
//        rotateY: [50, 0],
        opacity: [0, 1],
        easing: "easeOutQuad",
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
        opacity: [0, 0.8],
        easing: "cubicBezier( 0.1, 0.63, 0.355, 1 )",
        duration: 1500,
        delay: 2200,
    });
    
    anime({
        targets: mainTextBlock,
        translateX: [-50, 0],
        opacity: [0, 1],
        easing: "cubicBezier( 0.1, 0.63, 0.355, 1 )",
        duration: 1200,
        delay: 2500,
    });
    
    anime({
        targets: mainCTA,
        translateX: [-50, 0],
        opacity: [0, 1],
        easing: "cubicBezier( 0.1, 0.63, 0.355, 1 )",
        duration: 1200,
        delay: 2600,
    });
    
    anime({
        targets: mountains,
        translateY: [200, 0],
        opacity: [0, 1],
        easing: "cubicBezier(0.1, 0.63, 0.355, 1)",
        duration: 1500,
        delay: 1000,
    });
    
    anime({
        targets: clouds,
        opacity: [0.2, 1],
        easing: "easeOutQuad",
        duration: 1200,
        delay: 800,
    });
    
}

// Intro Initialization

function introInit() {
    
    anime({
        targets: heroTextSection,
        width: [0],
        translateX: 200,
        duration: 0
    });
    
    anime({
        targets: allHeaderElements,
        translateX: [-20],
        opacity: [0],
        duration: 0
    });
    
    anime({
        targets: myBigTextBlock,
        translateY: [100],
        opacity: [0],
        duration: 0
    });
    
    anime({
        targets: myImageBlock,
        translateY: [100],
        opacity: [0],
        duration: 0
    });
    
    anime({
        targets: mainTextBlock,
        translateX: [-50],
        opacity: [0],
        duration: 0
    });
    
    anime({
        targets: mainCTA,
        translateX: [-50],
        opacity: [0],
        duration: 0
    });
    
    anime({
        targets: mountains,
        opacity: 0,
        duration: 0
    });
    
}

introInit();





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




//############################################# -- Window Load

setTimeout(() => {
    headerObserver.observe(headerController);
}, 3000);


window.addEventListener("load", () => {
    setTimeout(() => {intro();}, 1000);

});







//############################################# -- Secitons intersection Observer

var sections = document.querySelectorAll(".scroll-into-view");
//var sectionContainer = document.querySelector(".my-work-section > div:nth-child(2)");

var windowRect2 = {
    rootMargin: "0px 0px -200px 0px",
};

var sectionsIO = new IntersectionObserver(sectionsObserverFn, windowRect2);

function sectionsObserverFn(entries) {
    
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("scrolled-into-view");
            
//            anime({
//                targets: contents[entry.target.firstElementChild],
//                width: [0, "50%"],
//                easing: "cubicBezier( 0.93, 0, 0.09, 1 )",
//                opacity: [0, 1],
//                duration: 1200,
//            });
       } 
    });
   
}



sections.forEach(item => {
    sectionsIO.observe(item);
});



//############################################# -- Content intersection Observer

const contents = document.querySelectorAll(".scroll-into-view-content");

const contentsIO = new IntersectionObserver(contentsObserverFn, windowRect2);

function contentsObserverFn(entries) {
    
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("scrolled-into-view-content");
       } 
    });
   
}



contents.forEach(item => {
    contentsIO.observe(item);
});




const myToolsIcons = document.querySelectorAll(".my-specialties-section > div > div");
const myToolsHeader = document.querySelectorAll(".my-specialties-section h2");
const myToolsParagraph = document.querySelector(".my-specialties-section p");

let myToolsIO = new IntersectionObserver(myToolsFn, windowRect2);

const myToolsIconsAnimated = anime({
    targets: myToolsIcons,
    translateX: [-20, 0],
    translateY: [-20, 0],
//        rotateY: [50, 0],
    opacity: [0, 1],
    easing: "easeOutQuad",
    duration: 1200,
    delay: anime.stagger(150, {start: 200}),
    loop: false,
    autoplay: false,
    complete: function() { myToolsIconsAnimated.remove(myToolsIcons); },
});

function myToolsFn(entries) {
    
    if(entries[0].isIntersecting) {
        myToolsIconsAnimated.play();
    }
   
}


myToolsIO.observe(myToolsParagraph);











//############################################# -- Contact Form

//var form = document.getElementById("my-form");
//    
//    async function handleSubmit(event) {
//      event.preventDefault();
//      var status = document.getElementById("my-form-status");
//      var data = new FormData(event.target);
//      fetch(event.target.action, {
//        method: form.method,
//        body: data,
//        headers: {
//            'Accept': 'application/json'
//        }
//      }).then(response => {
//        status.innerHTML = "Thanks for your submission!";
//        form.reset()
//      }).catch(error => {
//        status.innerHTML = "Oops! There was a problem submitting your form"
//      });
//    }
//    form.addEventListener("submit", handleSubmit)




















