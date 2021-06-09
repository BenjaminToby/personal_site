


var headerController = document.querySelector("#header-controller");
var windowRect = {
    rootMargin: "0px",
};

var headerObserver = new IntersectionObserver(changeHeader, windowRect);

function changeHeader(entry) {
    
    if(entry[0].isIntersecting) {
        document.querySelector("header").className = "none";
        document.querySelector("header img").style.width = "40px";
        document.querySelector("header img").style.top = "0px";
        document.querySelector("header > a > div").classList.remove("logo-text-dissapear");
    } else {
        document.querySelector("header").classList.add("scrolled");
        document.querySelector("header img").style.width = "60px";
        document.querySelector("header img").style.top = "20px";
        document.querySelector("header > a > div").classList.add("logo-text-dissapear");
    }
}

headerObserver.observe(headerController);