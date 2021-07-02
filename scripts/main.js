

function ben(element) {
    return document.querySelector(element);
};

function benA(elements) {
    return document.querySelectorAll(elements);
};


//############################################# -- Intro Animations

const preloader = ben("#preloader-container");
const heroTextSection = ben(".hero-section > div:nth-child(2)");
const myImageBlock = ben(".benjamin-image-block-wrapper");
const myBigTextBlock = ben(".benjamin-big-text-block");
const mainTextBlock = ben(".main-text-block");
const mainCTA = ben(".main-cta-button");
const allHeaderElements = benA("header *:not(header > div)");
const mountains = ben("#mountains");
const clouds = ben("#clouds");
const footerController = ben(".contact-section-controller");
const header = ben("header");
const heroTxtGraphic = ben(".hero-text-section-graphic");
const socialLinks = ben("header > div:nth-of-type(2)");
// const heroTextGraphics = ben(".hero-text-section-graphic");


function intro() {

    preloader.style.pointerEvents = "none";

    anime({
        targets: preloader,
        opacity: 0,
        // pointerEvents: "none",
        easing: "easeOutQuad",
        duration: 1200,
        delay: 800,
    });

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

    anime({
        targets: mountains,
        translateY: [
            { value: 200, duration: 0, delay: 0 },
            { value: 0, duration: 1500, delay: 1000 }
        ],
        left: [
            { value: 0, duration: 0, delay: 0 },
            { value: -50, duration: 800, delay: 1600 },
        ],
        opacity: [
            { value: 0, duration: 0, delay: 0 },
            { value: 1, duration: 1500, delay: 1000 },
        ],
        easing: "cubicBezier(0.1, 0.63, 0.355, 1)",
    });

    anime({
        targets: heroTxtGraphic,
        opacity: [0, 1],
        translateZ: [100, 10],
        easing: "easeOutQuad",
        duration: 1200,
        delay: 2000,
    });

    anime({
        targets: benA(".hero-text-section-graphic *"),
        opacity: [0, 1],
        easing: "easeOutQuad",
        duration: 800,
        delay: anime.stagger(300, { start: 3000 }, { easing: 'easeOutQuad' }),
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

var headerController = ben("#header-controller");
var windowRect = {
    rootMargin: "0px",
};

var headerObserver = new IntersectionObserver(changeHeader, windowRect);

function changeHeader(entry) {

    if (entry[0].isIntersecting) {

        if (window.innerWidth > 800) {
            benA(".nav-link.footer-special").forEach(item => {

                if (entry[0].target.className == "contact-section-controller") {
                    item.style.color = "white";
                }
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
        }

        anime({
            targets: "header > a > div",
            translateX: 0,
            opacity: 1,
            duration: 1000,
        });

        if (window.innerWidth < 801 && window.innerWidth > 450) {
            anime({
                targets: socialLinks,
                opacity: 1,
                easing: "easeOutCubic",
                duration: 300,
            });
        }

    } else {

        if (window.innerWidth > 800) {

            // if (entry[0].isIntersecting) {

            benA(".nav-link.footer-special").forEach(item => {

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

        if (window.innerWidth < 801 && window.innerWidth > 450) {
            anime({
                targets: socialLinks,
                opacity: 0,
                easing: "easeOutCubic",
                duration: 300,
            });
        }
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

const sections = benA(".scroll-into-view");
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

const contents = benA(".scroll-into-view-content");
const contentsIO = new IntersectionObserver(contentsObserverFn, { rootMargin: "0px 0px -100px 0px" });

const contentsAlt = benA(".scroll-into-view-content-2");
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

const myImageAboutSectionObserver = new IntersectionObserver(contentsObserverAboutImg, { rootMargin: "0px 0px -200px 0px", });
const myImageAbout = ben(".about-me-section img");

function contentsObserverAboutImg(entries) {

    if (entries[0].isIntersecting) {
        myImageAbout.animate([
            {
                transform: "none",
                opacity: .5,
            }
        ], {
            duration: 1300,
            easing: "cubic-bezier(0.1, 0.63, 0.355, 1)",
            fill: "forwards",
            delay: 1000,
        });

        myImageAboutSectionObserver.unobserve(myImageAbout);
    }

}

myImageAboutSectionObserver.observe(myImageAbout);



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

const navSections = benA("section");
const myWorkNavLink = ben("#my-work-link");
const aboutMeNavLink = ben("#about-me-link");
const resumeLink = ben("#resume-link");
const contactMeNavLink = ben("#contact-me-link");

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

    // let items = [clouds, mountains, myImageBlock, mainTextBlock, heroTxtGraphic, myBigTextBlock];

    // items.forEach(item => { item.style.transition = "all 1s ease" });

    // clouds.animate([{
    //     transform: `translateX(${xPos * -10}px) translateY(${yPos * -10}px)`,
    // }], {
    //     easing: "ease",
    //     fill: "forwards",
    // });

    // mountains.animate([{
    //     transform: `translateX(${xPos * -100}px) translateY(${yPos * -20}px)`,
    // }], {
    //     easing: "ease",
    //     fill: "forwards",
    //     direction: "normal"
    // });

    // myImageBlock.animate([{
    //     transform: `translateX(${xPos * -30}px) translateY(${yPos * -10}px) rotateX(${yPos * 4}deg) rotateY(${xPos * -3}deg)`,
    // }], {
    //     easing: "ease",
    //     fill: "forwards",
    // });

    // mainTextBlock.animate([{
    //     transform: `translateZ(15px) rotateX(${yPos * 2}deg) rotateY(${xPos * -2}deg)`,
    // }], {
    //     easing: "ease-out",
    //     fill: "forwards",
    // });

    // heroTxtGraphic.animate([{
    //     transform: `translateX(${xPos * -5}px) translateY(${yPos * -5}px) translateZ(10px) rotateX(${yPos * 2}deg) rotateY(${xPos * -2}deg)`,
    // }], {
    //     easing: "ease",
    //     fill: "forwards",
    // });

    // myBigTextBlock.animate([{
    //     transform: `translateX(${xPos * -40}px) translateY(${yPos * -20}px) translateZ(50px) rotateX(${yPos * 4}deg) rotateY(${xPos * -3}deg)`,
    // }], {
    //     easing: "ease",
    //     fill: "forwards",
    // });


    anime({
        targets: mountains,
        translateX: xPos * -100,
        translateY: yPos * -20,
        easing: "easeOutQuad",
        duration: 700,
    });

    anime({
        targets: clouds,
        translateX: xPos * -10,
        translateY: yPos * -10,
        easing: "easeOutQuad",
        duration: 500,
    });

    anime({
        targets: myImageBlock,
        translateX: xPos * -30,
        translateY: yPos * -10,
        easing: "easeOutQuad",
        duration: 500,
        rotateX: yPos * 4,
        rotateY: xPos * -3
    });

    anime({
        targets: myBigTextBlock,
        translateX: xPos * -40,
        translateY: yPos * -20,
        translateZ: 50,
        rotateX: yPos * 4,
        rotateY: xPos * -3,
        easing: "easeOutQuad",
        duration: 500,
    });

    anime({
        targets: mainTextBlock,
        translateZ: 15,
        rotateX: yPos * 2,
        rotateY: xPos * -2,
        easing: "easeOutQuad",
        duration: 300,
    });

    anime({
        targets: heroTxtGraphic,
        translateX: xPos * -5,
        translateY: yPos * -5,
        translateZ: 10,
        rotateX: yPos * 2,
        rotateY: xPos * -2,
        easing: "easeOutQuad",
        duration: 300,
    });

}



const uiuxDesignerLinks = benA(".main-hero-text a");
const myImage = ben(".benjamin-image-block");
const myImageOverlay = ben(".benjamin-image-block-overlay");
const serviceDisplay = ben(".service-display-block");

uiuxDesignerLinks.forEach(item => {

    item.addEventListener("mouseover", function (event) {

        // myImage.style.transform = "rotateX(1deg) rotateY(2deg) rotateZ(-2deg) translateZ(20px) translateX(20px)";
        myImage.style.width = "20vw";

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

const hamburgerButton = ben(".hamburger-button");
const mobileNavWrapper = ben("header > div:nth-of-type(1)");
let a = 0;

hamburgerButton.addEventListener("click", () => {

    if (a == 0) {

        if (window.innerWidth > 449) {

            mobileNavWrapper.animate([
                {
                    opacity: 0,
                    height: "0px",
                    pointerEvents: "none",
                    transform: "translateZ(50px) translateY(-50px)"
                },
                {
                    opacity: 1,
                    height: "350px",
                    pointerEvents: "visible",
                    transform: "translateZ(0px) translateY(0px)"
                }
            ], {
                fill: "both",
                duration: 300,
                easing: "cubic-bezier( 0.1, 0.63, 0.355, 1 )"
            });
        } else {
            mobileNavWrapper.animate([
                {
                    opacity: 0,
                    height: "0px",
                    pointerEvents: "none",
                    transform: "translateZ(50px) translateY(-50px)"
                },
                {
                    opacity: 1,
                    height: "420px",
                    pointerEvents: "visible",
                    transform: "translateZ(0px) translateY(0px)"
                }
            ], {
                fill: "both",
                duration: 300,
                easing: "cubic-bezier( 0.1, 0.63, 0.355, 1 )"
            });
        }

        anime({
            targets: socialLinks,
            opacity: 1,
            easing: "easeOutCubic",
            duration: 300,
        });

    } else {

        if (window.innerWidth > 449) {
            mobileNavWrapper.animate([
                {
                    opacity: 1,
                    height: "350px",
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
                duration: 300,
                easing: "cubic-bezier( 0.1, 0.63, 0.355, 1 )"
            });
        } else {
            mobileNavWrapper.animate([
                {
                    opacity: 1,
                    height: "420px",
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
                duration: 300,
                easing: "cubic-bezier( 0.1, 0.63, 0.355, 1 )"
            });
        }

        anime({
            targets: socialLinks,
            opacity: 0,
            easing: "easeOutCubic",
            duration: 300,
        });

        a = -1;
    }

    a++;

    // mobileNavWrapper.style.opacity = "1"
});


hamburgerButton.addEventListener("blur", () => {

    if (a == 1) {

        if (window.innerWidth > 449) {

            mobileNavWrapper.animate([
                {
                    opacity: 1,
                    height: "350px",
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

        } else {
            mobileNavWrapper.animate([
                {
                    opacity: 1,
                    height: "420px",
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
        }

        anime({
            targets: socialLinks,
            opacity: 0,
            easing: "easeOutCubic",
            duration: 300,
        });

        a = 0;
    }

    // mobileNavWrapper.style.opacity = "1"
});









ben(".my-specialties-section button").addEventListener("click", () => {
    window.location = "docs/Benjamin-Toby-CV.pdf";
});




//############################################# -- My Work Slider

const portfolioContainter = ben(".portfolio-items-container");
const portfolioEntries = benA(".portfolio-entry");
const portfolioLeftButton = ben(".portfolio-left-button");
const portfolioRightButton = ben(".portfolio-right-button");

let p = 0;

function portfolioClickEvents() {

    // anime({
    //     targets: portfolioEntries,
    //     opacity: [1, 0],
    //     translateZ: [0, -50],
    //     duration: 300,
    //     easing: "cubic-bezier( 0.1, 0.63, 0.355, 1 )"
    // });

    if (p == 0) {
        portfolioLeftButton.style.opacity = ".2";
    } else if (p == (portfolioEntries.length - 1)) {
        portfolioRightButton.style.opacity = ".2";
    }


    portfolioEntries.forEach(entry => {
        // entry.style.opacity = "0";

        entry.animate([
            { opacity: 0, transform: "translateZ(-50px)", pointerEvents: "none" }
        ], {
            duration: 500,
            fill: "both",
            easing: "cubic-bezier( 0.1, 0.63, 0.355, 1 )"
        });
    });

    // portfolioEntries[p].style.opacity = "1";
    // anime({
    //     targets: (portfolioEntries[p]),
    //     opacity: [0, 1],
    //     translateZ: [-50, 0],
    //     duration: 300,
    //     easing: "cubic-bezier( 0.1, 0.63, 0.355, 1 )",
    //     delay: 200,
    // });

    portfolioEntries[p].animate([
        { opacity: 1, transform: "translateZ(0px)", pointerEvents: "visible" }
    ], {
        duration: 500,
        fill: "both",
        delay: 200,
        easing: "cubic-bezier( 0.1, 0.63, 0.355, 1 )"
    });
}

portfolioClickEvents();
portfolioLeftButton.style.opacity = ".2";

portfolioRightButton.addEventListener("click", () => {
    if (p == (portfolioEntries.length - 1)) { return; };
    p++;
    portfolioClickEvents();
    portfolioLeftButton.style.opacity = "1";
});

portfolioLeftButton.addEventListener("click", () => {
    if (p == 0) { return; };
    p--;
    portfolioClickEvents();
    portfolioRightButton.style.opacity = "1";
});









//############################################# -- Lottie Animations

const portfolioEntry1 = ben("#transcend-barriers");
const portfolioEntry2 = ben("#github-to-asana-animation");

const portfolioEntry1Animation = lottie.loadAnimation({
    container: portfolioEntry1,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "scripts/portfolio-item-1.json"
});

const portfolioEntry2Animation = lottie.loadAnimation({
    container: portfolioEntry2,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "scripts/portfolio-item-2.json"
});
















