var uiUXLink = document.getElementById("ui-ux-design");
var webDesignLink = document.getElementById("web-design");
var frontentDevLink = document.getElementById("frontend-dev");
var graphicDesignLink = document.getElementById("graphic-design");
var faceWrapper = document.getElementById("my-face-wrapper");

lottie.setQuality("low");
        
var myFaceContainer = document.getElementById("my-face");

var myFace = lottie.loadAnimation({
    container: myFaceContainer,
    path: "scripts/face.json",
    renderer: "svg",
    loop: false,
    autoplay: false,
});

myFace.setSpeed(1);

function steadyState() {
    myFace.playSegments([44, 205], true);
    myFace.loop = true;
}

var startSteadyState;



window.addEventListener("load", () => {
    myFace.playSegments([0, 50], true);
    startSteadyState = setTimeout(() => {steadyState();}, 1000);    
});








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











