console.log("main js");

const lenis = new Lenis();

lenis.on("scroll", (e) => {
    // console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/**
 * GSAP globals
 */

// gsap.to(".gsap-text", {
//     text: "Welcome",
// });
