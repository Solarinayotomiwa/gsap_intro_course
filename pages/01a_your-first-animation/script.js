gsap.to('.card', {
    opacity: 1,
    scale: 1,
    duration: 1,
    rotate: 90,
    onComplete: () => {
        gsap.to('.card', {
            y:-10,
            repeat: -1,
            yoyo: true,
            duration: 0.5
        })
    }
});

