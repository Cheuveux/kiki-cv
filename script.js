gsap.from(".footer-button, .footer-button a", {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
});
gsap.from(".main-container", {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
});