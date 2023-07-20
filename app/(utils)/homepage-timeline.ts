import { gsap } from "gsap";
import { ScrollTrigger, Observer } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Observer);

export default function homepageTimeline({ componentRef }: { componentRef: { current: HTMLDivElement | null } }) {
    const mm = gsap.matchMedia();

    const compHeight = componentRef.current?.clientHeight;

    const isMobile = window.innerWidth <= 1200;

    // mm.add("(min-width: 1200px)", () => {
    ScrollTrigger.create({
        trigger: "#homepage-content-wrapper",
        start: "200px 200px",
        end: "bottom 90%",
        pin: isMobile ? null : "#main-image",
        scrub: 1,
        onUpdate: (self) => {
            const scrollTop = compHeight ? self.progress * compHeight : 0;

            /**
             * Origin
             */
            if (scrollTop < 300) {
                gsap.to("nav", {
                    opacity: 1,
                    pointerEvents: "visible",
                });
                gsap.to("header", {
                    zIndex: 2000,
                });
            } else {
                gsap.to("nav", {
                    opacity: 0,
                    pointerEvents: "none",
                });
                gsap.to("header", {
                    zIndex: 0,
                });
            }

            /**
             * Handle Mobile
             */
            if (isMobile && scrollTop > 100) {
                gsap.to("#main-image", {
                    opacity: 0.1,
                    duration: 1,
                });
            } else {
                gsap.to("#main-image", {
                    opacity: 1,
                    duration: 1,
                });
            }
        },
        onEnter: (self) => {},
    });

    /**
     * Position color map
     */
    const positionColorMap: {
        x: number;
        imgBg: string;
        bodyBg: string;
        duration: number;
        imgSrc?: string;
    }[] = [
        {
            x: 0,
            imgBg: "#3e3f9c",
            bodyBg: "#181515",
            duration: 1,
            imgSrc: "/images/my-photo-stroked.png",
        },
        {
            x: -50,
            imgBg: "#FE6847",
            bodyBg: "#292a6b",
            duration: 1,
            imgSrc: "/images/my-photo-3.png",
        },
        {
            x: 600,
            imgBg: "#688e26",
            bodyBg: "#181515",
            duration: 1.2,
            imgSrc: "/images/programming-laptop.png",
        },
        {
            x: -50,
            imgBg: "#1B2CC1",
            bodyBg: "#091540",
            duration: 1.2,
            imgSrc: "/images/projects-section-image.png",
        },
        {
            x: 600,
            imgBg: "#ffd87d",
            bodyBg: "#3e3f9c",
            duration: 1.2,
            imgSrc: "/images/why-so-serious.png",
        },
    ];

    /**
     * Activate section based on scroll position
     */
    const sections = document.querySelectorAll(".page-section");

    function activateSection(index: number) {
        const targetPositionMap = positionColorMap[index];

        if (!targetPositionMap) {
            return;
        }

        gsap.to("#main-image", {
            backgroundColor: targetPositionMap.imgBg,
            x: isMobile ? 0 : targetPositionMap.x,
            duration: targetPositionMap.duration,
        });
        gsap.to("body", {
            backgroundColor: targetPositionMap.bodyBg,
        });

        if (targetPositionMap?.imgSrc) {
            changeMainImage(targetPositionMap.imgSrc);
        }

        if (index >= 2) {
            gsap.to("#main-image img", {
                filter: "none",
                duration: 1,
            });
        } else {
            gsap.to("#main-image img", {
                filter: "grayscale(100%) contrast(140%)",
                duration: 1,
            });
        }
    }

    sections.forEach((section, index) => {
        ScrollTrigger.create({
            trigger: section,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: (self) => {
                activateSection(index);
            },
            onEnterBack: (self) => {
                activateSection(index);
            },
        });
    });

    /**
     * Entry animation timeline
     */
    const entryTimeline = gsap.timeline();

    entryTimeline
        .from("#main-image", {
            clipPath: "circle(0)",
        })
        .to("#main-image", {
            clipPath: "circle(100%)",
            scale: 1,
            duration: 1,
        });

    gsap.to("#main-image", {
        y: 20,
        repeat: -1,
        duration: 2,
        yoyo: true,
        ease: "sine.inOut",
    });
    // });
}

async function changeMainImage(src: string) {
    const mainImage: HTMLImageElement | null = document.querySelector("#main-image img");

    if (mainImage) {
        await gsap.to(mainImage, {
            opacity: 0,
            duration: 0.5,
        });

        if (mainImage) {
            mainImage.setAttribute("src", src);

            mainImage.onload = () => {
                gsap.to(mainImage, {
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.5,
                });
            };
        }
    }
}
