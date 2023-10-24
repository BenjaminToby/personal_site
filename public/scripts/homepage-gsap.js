/**
 * Register plugins
 */
gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add("(min-width: 1200px)", () => {
    ScrollTrigger.create({
        trigger: "#homepage-content-wrapper",
        // toggleActions: "play none none none",
        start: "top 200px",
        end: "bottom 90%",
        pin: "#main-image",
        // markers: true,
        scrub: 1,
        onUpdate: (self) => {
            /**
             * Origin
             */
            if (self.progress < 0.4) {
                gsap.to("#main-image", {
                    backgroundColor: "#3e3f9c",
                    x: 0,
                    duration: 1,
                });
                gsap.to("body", {
                    backgroundColor: "#181515",
                });
            }

            /**
             * Step 2
             */
            if (self.progress > 0.4) {
                gsap.to("#main-image", {
                    backgroundColor: "#FE6847",
                    x: -50,
                    duration: 1,
                });
                gsap.to("body", {
                    backgroundColor: "#292a6b",
                });
            }
            // if (self.progress > 0 && self.progress < 1) {
            //     gsap.to("#main-image", {
            //         position: "fixed",
            //         top: 20,
            //         left: 20,
            //     });
            // }
        },
        onLeave: (self) => {},
    });

    // gsap.to("#main-image", {
    //     scale: 1,
    //     duration: 1,
    // });

    /**
     * Entry animation timeline
     */
    const entryTimeline = gsap.timeline();

    entryTimeline.to("#main-image", {
        scale: 1,
        duration: 1,
    });

    /**
     * Scroll animation timeline
     */
    // const scrollTimeline = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#homepage-content-wrapper",
    //         start: "top 200px",
    //         end: "bottom 90%",
    //         scrub: 1,
    //     },
    // });

    // scrollTimeline
    //     // .to("#main-image", {
    //     //     scale: 1,
    //     //     duration: 1,
    //     // })
    //     .to("#main-image", {
    //         rotate: -10,
    //     });
});

/**
 * Animates the hero section
 */
// function homepageTimeline() {
//     /**
//      * Animate hero section
//      */
//     tl.to("#main-image", {
//         y: 100,
//     }).to("#main-image", {
//         y: -100,
//     });
//     tl.to("#main-image", {
//         x: 300,
//         scrollTrigger: {
//             trigger: "#main-image",
//             // toggleActions: "play none none none",
//             // start: "top center",
//             // end: "bottom 500px",
//             // pin: "#main-image",
//             markers: true,
//             scrub: 1,
//         },
//     });
// }

// .to({
//     scrollTrigger: {
//         trigger: "#homepage-content-wrapper",
//         // toggleActions: "play none none none",
//         start: "top top",
//         end: "bottom bottom",
//         pin: "#main-image",
//         markers: true,
//         scrub: 1,
//     },
// });
// .to("#main-image", {
//     y: 300,
//     duration: 1,
//     scrollTrigger: {
//         // trigger: "#homepage-content-wrapper",
//         // toggleActions: "play none none none",
//         start: "top 100%",
//         end: "bottom 0%",
//         pin: "#main-image",
//         markers: true,
//         scrub: 1,
//     },
// });

// requestAnimationFrame(async () => {
//     await tl.fromTo(
//         "#main-image",
//         {
//             scale: 1.2,
//         },
//         {
//             scale: 1,
//             duration: 1,
//         }
//     );

//     await tl.to("#main-image", {
//         y: 300,
//         duration: 1,
//         scrollTrigger: {
//             // trigger: "#main-image",
//             // toggleActions: "play none none none",
//             // start: "top center",
//             // end: "bottom 500px",
//             pin: true,
//             markers: true,
//             scrub: 1,
//         },
//     });
// });
