var faceWrapper = document.getElementById("my-face-wrapper");

lottie.setQuality("low");
        
var myFaceContainer = document.getElementById("my-face");
var morphShape1Container = document.getElementById("morph-shape-1");
var morphShape2Container = document.getElementById("morph-shape-2");
var morphShape3Container = document.getElementById("morph-shape-3");

var myFace = lottie.loadAnimation({
    container: myFaceContainer,
    path: "scripts/face.json",
    renderer: "svg",
    loop: false,
    autoplay: false,
});

var morphShape1 = lottie.loadAnimation({
    container: morphShape1Container,
    path: "scripts/morphing-shape-1.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
});

var morphShape2 = lottie.loadAnimation({
    container: morphShape2Container,
    path: "scripts/morphing-shape-1.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
});

morphShape1.setSpeed(1.5);

var morphShape3 = lottie.loadAnimation({
    container: morphShape3Container,
    path: "scripts/morphing-shape-1.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
});

morphShape3.setSpeed(2);




function steadyState() {
    myFace.playSegments([44, 205], true);
    myFace.loop = true;
}

var startSteadyState;



window.addEventListener("load", () => {
    myFace.playSegments([0, 50], true);
    startSteadyState = setTimeout(() => {steadyState();}, 1000);    
});







//--------------------------------------------------------------------------- Services mouseover
document.querySelectorAll(".hero-content-link").forEach(item => {
   item.addEventListener("mouseover", () => {
       
       clearTimeout(startSteadyState);
       myFace.loop = false;
       myFace.playSegments([210, 249], true);
       faceWrapper.style.transform = "rotate3d(20,-20,0,20deg) translateZ(-50px)";
       document.getElementById("bg-circle").style.transform = "rotate3d(20,-20,0,20deg) translate3d(-50%,-55%,-300px)";
       myFaceContainer.style.mixBlendMode = "screen";
       
   }); 
});

document.getElementById("ui-ux-design").addEventListener("mouseover", () => {
    
    setTimeout(() => {document.getElementById("color-overlay").style.backgroundColor = "#A5E6BA";}, 400);
});

document.getElementById("web-design").addEventListener("mouseover", () => {
    setTimeout(() => {document.getElementById("color-overlay").style.backgroundColor = "#5B2A86";}, 400);    
});

document.getElementById("frontend-dev").addEventListener("mouseover", () => {
    setTimeout(() => {document.getElementById("color-overlay").style.backgroundColor = "#7785AC";}, 400);    
});

document.getElementById("graphic-design").addEventListener("mouseover", () => {
    setTimeout(() => {document.getElementById("color-overlay").style.backgroundColor = "#9AC6C5";}, 400);    
});


//--------------------------------------------------------------------------- Services mouseout
document.querySelectorAll(".hero-content-link").forEach(item => {
   item.addEventListener("mouseout", () => {
       
       startSteadyState = setTimeout(() => {
           
           steadyState();
           faceWrapper.style.transform = "none";
           document.getElementById("color-overlay").style.backgroundColor = "transparent";
           document.getElementById("bg-circle").style.transform = "translate3d(-50%,-55%,-300px)";
           myFaceContainer.style.mixBlendMode = "normal";
                                        
       }, 500);
       
   }); 
});


/*
//--------------------------------------------------------------------------- UI UX
uiUXLink.addEventListener("mouseover", () => {
    clearTimeout(startSteadyState);
    myFace.loop = false;
    myFace.playSegments([210, 249], true);
    faceWrapper.style.transform = "rotate3d(20,-20,0,20deg) translateZ(-50px)";
});

uiUXLink.addEventListener("mouseout", () => {
    startSteadyState = setTimeout(() => {steadyState();}, 500);
    faceWrapper.style.transform = "none";
});

//--------------------------------------------------------------------------- Web Design
webDesignLink.addEventListener("mouseover", () => {
    clearTimeout(startSteadyState);
    myFace.loop = false;
    myFace.playSegments([210, 249], true);
    faceWrapper.style.transform = "rotate3d(20,-20,0,20deg) translateZ(-50px)";
});

webDesignLink.addEventListener("mouseout", () => {
    startSteadyState = setTimeout(() => {steadyState();}, 500);
    faceWrapper.style.transform = "none";
});

//--------------------------------------------------------------------------- Frontend Dev
frontentDevLink.addEventListener("mouseover", () => {
    clearTimeout(startSteadyState);
    myFace.loop = false;
    myFace.playSegments([210, 249], true);
    faceWrapper.style.transform = "rotate3d(20,-20,0,20deg) translateZ(-50px)";
});

frontentDevLink.addEventListener("mouseout", () => {
    startSteadyState = setTimeout(() => {steadyState();}, 500);
    faceWrapper.style.transform = "none";
});

//--------------------------------------------------------------------------- Graphic and Animation Design
graphicDesignLink.addEventListener("mouseover", () => {
    clearTimeout(startSteadyState);
    myFace.loop = false;
    myFace.playSegments([210, 249], true);
    faceWrapper.style.transform = "rotate3d(20,-20,0,20deg) translateZ(-50px)";
});

graphicDesignLink.addEventListener("mouseout", () => {
    startSteadyState = setTimeout(() => {steadyState();}, 500);
    faceWrapper.style.transform = "none";
});

*/









