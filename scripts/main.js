




//############################################# -- Intro Animations

const heroTextSection = document.querySelector(".hero-section > div:nth-child(2)");
const myImageBlock = document.querySelector(".benjamin-image-block-wrapper");
const myBigTextBlock = document.querySelector(".benjamin-big-text-block");
const mainTextBlock = document.querySelector(".main-text-block");
const mainCTA = document.querySelector(".main-cta-button");
const allHeaderElements = document.querySelectorAll("header *:not(header > div)");
const mountains = document.querySelector("#mountains");
const clouds = document.querySelector("#clouds");
const footerController = document.querySelector(".contact-section-controller");
const header = document.querySelector("header");
const heroTxtGraphic = document.querySelector(".hero-text-section-graphic");


function intro() {

    if (window.innerWidth > 800) {
        anime({
            targets: heroTextSection,
            width: [0, "50%"],
            translateX: [200, 0],
            easing: "cubicBezier( 0.93, 0, 0.09, 1 )",
            duration: 1500,
            delay: 1000,
        });
    } else if (window.innerWidth < 801 && window.innerWidth > 600) {
        anime({
            targets: heroTextSection,
            width: [0, "60%"],
            translateX: [200, 0],
            easing: "cubicBezier( 0.93, 0, 0.09, 1 )",
            duration: 1500,
            delay: 1000,
        });
    } else if (window.innerWidth < 601) {
        anime({
            targets: heroTextSection,
            width: [0, "100%"],
            translateX: [500, 0],
            easing: "cubicBezier( 0.93, 0, 0.09, 1 )",
            duration: 1500,
            delay: 0,
        });
    }

    anime({
        targets: allHeaderElements,
        translateX: [-20, 0],
        //        rotateY: [50, 0],
        opacity: [0, 1],
        easing: "easeOutQuad",
        duration: 800,
        delay: anime.stagger(100, { start: 1000 }/* , {easing: 'easeOutQuad'} */),
    });

    anime({
        targets: myBigTextBlock,
        translateY: [100, 0],
        translateZ: 50,
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

    if (window.innerWidth < 601) {
        anime({
            targets: mainTextBlock,
            translateX: [-50, 0],
            translateZ: [30, 0],
            opacity: [0, 1],
            easing: "cubicBezier( 0.1, 0.63, 0.355, 1 )",
            duration: 1200,
            delay: 2500,
        });
    } else {
        anime({
            targets: mainTextBlock,
            translateX: [-50, 0],
            translateZ: [30, 15],
            opacity: [0, 1],
            easing: "cubicBezier( 0.1, 0.63, 0.355, 1 )",
            duration: 1200,
            delay: 2500,
        });
    }


    anime({
        targets: mainCTA,
        translateX: [-50, 0],
        opacity: [0, 1],
        easing: "cubicBezier( 0.1, 0.63, 0.355, 1 )",
        duration: 1200,
        delay: 2600,
    });

    if (window.innerWidth > 600) {

        anime({
            targets: mountains,
            translateY: [200, 0],
            opacity: [0, 1],
            easing: "cubicBezier(0.1, 0.63, 0.355, 1)",
            duration: 1500,
            delay: 1000,
        })

        anime({
            targets: mountains,
            left: [0, -50],
            easing: "easeOutQuad",
            duration: 800,
            delay: 1600,
        });
    }

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

    if (window.innerWidth < 601) {
        anime({
            targets: heroTextSection,
            width: [0],
            translateX: 500,
            duration: 0
        });
    } else {
        anime({
            targets: heroTextSection,
            width: [0],
            translateX: 200,
            duration: 0
        });
    }



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

    if (entry[0].isIntersecting) {

        if (window.innerWidth > 800) {
            document.querySelectorAll(".nav-link").forEach(item => {

                if (entry[0].target.className == "contact-section-controller") { item.style.color = "white"; }
            });

            header.className = "none";

            anime({
                targets: "header > a > img",
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
        }

    } else {

        if (window.innerWidth > 800) {

            // if (entry[0].isIntersecting) {

            document.querySelectorAll(".nav-link").forEach(item => {

                if (entry[0].target.className == "contact-section-controller") { item.style.color = ""; }
            });


            header.classList.add("scrolled");

            anime({
                targets: "header > a > img",
                width: 60,
                height: 130,
                top: 20,
                duration: 400,
                easing: "easeOutCubic",
            });
            // }
        }

        anime({
            targets: "header > a > div",
            translateX: -50,
            opacity: 0,
            duration: 1000,
        });
    }
}




//############################################# -- Window Load




window.addEventListener("load", () => {
    setTimeout(() => { intro(); }, 1000);
    setTimeout(() => { headerObserver.observe(headerController); }, 3000);

    if (window.innerWidth > 800) {
        setTimeout(() => {
            window.addEventListener("mousemove", parralaxMouse);
            // footerHeaderFn();
        }, 4000);
    }

});







//############################################# -- Secitons intersection Observer

const sections = document.querySelectorAll(".scroll-into-view");
//var sectionContainer = document.querySelector(".my-work-section > div:nth-child(2)");

let footerHeaderFn = () => { headerObserver.observe(footerController); };

var windowRect2 = {
    rootMargin: "0px 0px -200px 0px",
};

var sectionsIO = new IntersectionObserver(sectionsObserverFn, windowRect2);

function sectionsObserverFn(entries) {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // console.log(entry.target);
            entry.target.classList.add("scrolled-into-view");

            if (entry.target.id == "footer-right-section" && entries[2]) { return; }


            if (window.innerWidth > 800) { footerHeaderFn(); }
        }
    });

}



sections.forEach(item => {
    sectionsIO.observe(item);
});



//############################################# -- Content intersection Observer

const contents = document.querySelectorAll(".scroll-into-view-content");
const contentsIO = new IntersectionObserver(contentsObserverFn, { rootMargin: "0px 0px -100px 0px" });

const contentsAlt = document.querySelectorAll(".scroll-into-view-content-2");
const contentsIOAlt = new IntersectionObserver(contentsObserverFn, { rootMargin: "0px" });

function contentsObserverFn(entries) {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.animate([
                {
                    transform: "none",
                    opacity: 1,
                }
            ], {
                duration: 1300,
                easing: "cubic-bezier(0.1, 0.63, 0.355, 1)",
                fill: "forwards",
                delay: (entry.target.dataset.delay),
            });

            contentsIO.unobserve(entry.target);
            contentsIOAlt.unobserve(entry.target);
        }
    });

}



contents.forEach(item => {
    contentsIO.observe(item);
});


contentsAlt.forEach(item => {
    contentsIOAlt.observe(item);
});









//############################################# -- Scroll Navigations

anime({
    targets: ".hero-text-section-graphic img",
    translateY: [-5, 5],
    easing: "easeInOutQuad",
    duration: 1000,
    loop: true,
    direction: "alternate",
});

const navSections = document.querySelectorAll("section");
const myWorkNavLink = document.querySelector("#my-work-link");
const aboutMeNavLink = document.querySelector("#about-me-link");
const resumeLink = document.querySelector("#resume-link");
const contactMeNavLink = document.querySelector("#contact-me-link");

const anchorLinksObserver = new IntersectionObserver(anchorLinksFn, { rootMargin: "0px", threshold: 0.75 });

navSections.forEach(item => { anchorLinksObserver.observe(item); });

function anchorLinksFn(entries) {

    if (entries[3]) { return; }

    entries.forEach(entry => {

        myWorkNavLink.classList.remove("active-anchor");
        aboutMeNavLink.classList.remove("active-anchor");
        resumeLink.classList.remove("active-anchor");
        contactMeNavLink.classList.remove("active-anchor");

        if (entry.target.className == "hero-section") {
            return;
        } else if (entry.target.className == "my-work-section") {
            myWorkNavLink.classList.add("active-anchor");
        } else if (entry.target.className == "about-me-section") {
            aboutMeNavLink.classList.add("active-anchor");
        } else if (entry.target.className == "my-specialties-section") {
            resumeLink.classList.add("active-anchor");
        } else if (entry.target.className == "contact-section") {
            contactMeNavLink.classList.add("active-anchor");
        } else {
            myWorkNavLink.classList.remove("active-anchor");
            aboutMeNavLink.classList.remove("active-anchor");
            resumeLink.classList.remove("active-anchor");
            contactMeNavLink.classList.remove("active-anchor");
        }
    });

}

// anchorLinksObserver.observe(navSections[2], navSections[3]);











//############################################# -- Mousemove interactions


function parralaxMouse(event) {

    let xPos = (event.clientX / window.innerWidth) - 0.5;
    let yPos = (event.clientY / window.innerHeight) - 0.5;

    // mountains.style.transition = "all .7s ease";

    clouds.animate([{
        transform: `translateX(${xPos * -10}px) translateY(${yPos * -10}px)`,
    }], {
        easing: "ease",
        fill: "forwards",
    });

    mountains.animate([{
        transform: `translateX(${xPos * -100}px) translateY(${yPos * -20}px)`,
    }], {
        easing: "ease",
        fill: "forwards",
        direction: "normal"
    });

    myImageBlock.animate([{
        transform: `translateX(${xPos * -30}px) translateY(${yPos * -10}px) rotateX(${yPos * 4}deg) rotateY(${xPos * -3}deg)`,
    }], {
        easing: "ease",
        fill: "forwards",
    });

    mainTextBlock.animate([{
        transform: `translateZ(15px) rotateX(${yPos * 2}deg) rotateY(${xPos * -2}deg)`,
    }], {
        easing: "ease-out",
        fill: "forwards",
    });

    heroTxtGraphic.animate([{
        transform: `translateX(${xPos * -5}px) translateY(${yPos * -5}px) translateZ(10px) rotateX(${yPos * 2}deg) rotateY(${xPos * -2}deg)`,
    }], {
        easing: "ease",
        fill: "forwards",
    });

    myBigTextBlock.animate([{
        transform: `translateX(${xPos * -40}px) translateY(${yPos * -20}px) translateZ(50px) rotateX(${yPos * 4}deg) rotateY(${xPos * -3}deg)`,
    }], {
        easing: "ease",
        fill: "forwards",
    });

}



const uiuxDesignerLinks = document.querySelectorAll(".main-hero-text a");
const myImage = document.querySelector(".benjamin-image-block");
const myImageOverlay = document.querySelector(".benjamin-image-block-overlay");
const serviceDisplay = document.querySelector(".service-display-block");

uiuxDesignerLinks.forEach(item => {

    item.addEventListener("mouseover", function (event) {

        // myImage.style.transform = "rotateX(1deg) rotateY(2deg) rotateZ(-2deg) translateZ(20px) translateX(20px)";
        myImage.style.width = "23vw";

        if (event.target.className == "uiux-designer-link") {

            myImageOverlay.style.backgroundColor = "rgba(237,125,113,0.8)";

        } else if (event.target.className == "web-designer-link") {

            myImageOverlay.style.backgroundColor = "rgba(117,240,230,0.8)";
            // serviceDisplay.style.width = "300px";
            // serviceDisplay.style.height = "250px";

        } else if (event.target.className == "frontend-designer-link") {

            myImageOverlay.style.backgroundColor = "rgba(116,123,239,0.8)";
            // serviceDisplay.style.width = "250px";
            // serviceDisplay.style.height = "200px";

        } else if (event.target.className == "graphic-motion-designer-link") {

            myImageOverlay.style.backgroundColor = "rgba(28,55,102,0.8)";
            // serviceDisplay.style.width = "200px";
            // serviceDisplay.style.height = "200px";

        }

    });

});

uiuxDesignerLinks.forEach(item => {


    item.addEventListener("mouseout", function () {

        myImage.style.transform = "none";
        myImageOverlay.style.backgroundColor = "transparent";
        myImage.style.width = "100%";
        // serviceDisplay.style.opacity = "0";
        // serviceDisplay.style.transform = "none";

    });

});









//############################################# -- Mobile hamburger interactrions

const hamburgerButton = document.querySelector(".hamburger-button");
const mobileNavWrapper = document.querySelector("header > div:nth-of-type(1)");
let a = 0;

hamburgerButton.addEventListener("click", () => {

    if (a == 0) {

        mobileNavWrapper.animate([
            {
                opacity: 0,
                height: "0px",
                pointerEvents: "none",
                transform: "translateZ(50px) translateY(-50px)"
            },
            {
                opacity: 1,
                height: "450px",
                pointerEvents: "visible",
                transform: "translateZ(0px) translateY(0px)"
            }
        ], {
            fill: "both",
            duration: 600,
            easing: "cubic-bezier( 0.1, 0.63, 0.355, 1 )"
        });
    } else {
        mobileNavWrapper.animate([
            {
                opacity: 1,
                height: "450px",
                pointerEvents: "visible",
                transform: "translateZ(0px) translateY(0px)"

            },
            {
                opacity: 0,
                height: "0px",
                pointerEvents: "none",
                transform: "translateZ(50px) translateY(-50px)"
            }
        ], {
            fill: "both",
            duration: 600,
            easing: "cubic-bezier( 0.1, 0.63, 0.355, 1 )"
        });

        a = -1;
    }

    a++;

    // mobileNavWrapper.style.opacity = "1"
});


hamburgerButton.addEventListener("blur", () => {

    mobileNavWrapper.animate([
        {
            opacity: 1,
            height: "450px",
            pointerEvents: "visible",
            transform: "translateZ(0px) translateY(0px)"

        },
        {
            opacity: 0,
            height: "0px",
            pointerEvents: "none",
            transform: "translateZ(50px) translateY(-50px)"
        }
    ], {
        fill: "both",
        duration: 600,
        easing: "cubic-bezier( 0.1, 0.63, 0.355, 1 )"
    });

    a = 0;

    // mobileNavWrapper.style.opacity = "1"
});


















