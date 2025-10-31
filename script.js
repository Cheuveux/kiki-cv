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

// Sélection des boutons
const buttons = document.querySelectorAll('.footer-button a');

buttons.forEach(btn => {
  const text = btn.querySelector('h2');
  const icon = btn.querySelector('img');

  btn.addEventListener('mouseenter', () => {
    // Animation du texte
    gsap.to(text, { y: -4, duration: 0.3, ease: "power2.out" });
    // Animation de l'image
    gsap.to(icon, { rotation: 15, scale: 1.1, duration: 0.3, ease: "power2.out" });
  });

  btn.addEventListener('mouseleave', () => {
    // Retour à l'état initial
    gsap.to(text, { y: 0, duration: 0.3, ease: "power2.out" });
    gsap.to(icon, { rotation: 0, scale: 1, duration: 0.3, ease: "power2.out" });
  });
});