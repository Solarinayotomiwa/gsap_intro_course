import gsap from "gsap";

const showToastLoop = () => {
    gsap.to('.toast', {
        y: -150,
        scale: 1,
        opacity: 1,
        ease: 'elastic.out(1.4, 1.8)',
        duration: 0.6,
        onComplete: () => {
            gsap.to('.toast', {
                delay: 2,
                y: 0,
                scale: 0.8,
                opacity: 0,
                ease: 'power4.in',
                duration: 0.35,
                
            })
        
        
        }



    })
}

showToastLoop();