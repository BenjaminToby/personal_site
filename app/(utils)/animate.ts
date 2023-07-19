import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

/**
 * Register plugins
 */
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

/**
 * Animates the hero section
 */
export function hero() {
    /**
     * Animate hero section
     */
    gsap.fromTo(
        "#main-image",
        {
            z: -100,
            scale: 1.2,
        },
        {
            z: 0,
            duration: 1.5,
            scale: 1,
        }
    );

    gsap.fromTo(
        "#hero-text-section",
        {
            z: -100,
            scale: 1.2,
        },
        {
            z: 0,
            duration: 2.5,
            scale: 1,
        }
    );

    gsap.fromTo(
        "#main-image",
        {
            y: 0,
            // scale: 1,
        },
        {
            scrollTrigger: {
                scrub: 1,
            },
            y: 150,
            // scale: 0.8,
        }
    );

    gsap.fromTo(
        "#hero-text-section",
        {
            y: 0,
            // scale: 1,
        },
        {
            scrollTrigger: {
                scrub: 2,
            },
            y: 100,
            // scale: 0.8,
        }
    );
}

/**
 * Animates the about section
 */
export function about() {
    gsap.fromTo(
        "#about-section",
        {
            y: 40,
            scale: 0.8,
        },
        {
            scrollTrigger: {
                scrub: 4,
            },
            y: 0,
            scale: 1.1,
        }
    );

    gsap.to("#about-me-label", {
        scrollTrigger: {
            scrub: 2,
        },
        y: 300,
        scale: 0.8,
    });
}

/**
 * Animates the about section
 */
export function genericScroll() {
    gsap.fromTo(
        ".generic-scroll",
        {
            y: 0,
            scale: 0.9,
        },
        {
            scrollTrigger: {
                scrub: 3,
            },
            y: 100,
            scale: 1,
        }
    );
}

/**
 * Animates the about section
 */
export function appear() {
    gsap.fromTo(
        ".appear",
        {
            y: 40,
            scale: 0.8,
            opacity: 0,
        },
        {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 2,
            delay: (i, target) => {
                const datasetDelay = target?.dataset?.delay;

                if (datasetDelay) {
                    return datasetDelay;
                }
                return 0;
            },
        }
    );
}
