import gsap from "gsap";

const button = document.querySelector('.scroll-to-top');

let isFloating = false;

window.addEventListener('scroll', ()=> {
    if(window.scrollY > 500) {
        button.classList.add('show');

        if (!isFloating) {
            gsap.to(button, {
                y: -10,
                duration: 1.2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inout'
            })
        }
        
    } else {
        button.classList.remove('show');
    }
})

button.addEventListener('mouseenter', ()=> {
    gsap.to(button, {scale:1.1, duration:0.2})
})

button.addEventListener('mouseleave', ()=> {
    gsap.to(button, {scale:1, duration:0.15})
})

button.addEventListener('click', ()=>{
    
    window.scrollTo(0,0);

    const test = gsap.to(button, {scale:0.8, duration:0.1})

    //test.restart();
}) 
