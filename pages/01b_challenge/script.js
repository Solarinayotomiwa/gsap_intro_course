import gsap from "gsap";

gsap.to('.card', {
    scale: 0.8,
    yoyo: true,
    repeat: -1,
    duration: 0.6,
    boxShadow: "0 0 25px 10px rgba(84,160,255,0.8)",
    ease: "power1.inOut"
})