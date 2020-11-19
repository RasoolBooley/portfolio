const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    
    burger.addEventListener('click', () => {
        //toggle nav slide
        nav.classList.toggle('nav-active');

        //toggle animations
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ''
            } else{
                link.style.animation = `navFade 0.5s ease forwards ${index / 7 + .5}s`
            }
        });
        //burger animations
        burger.classList.toggle('toggle');
    });
}
navSlide();