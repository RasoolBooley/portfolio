const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

const navSlide = () => {
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
};

const newPage = () => {
    document.querySelectorAll('.nav-links a').forEach(item =>{
        item.addEventListener('click', ()=>{

        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ''
            } else{
                link.style.animation = `navFade 0.5s ease forwards ${index / 7 + .5}s`
            }
        });

        burger.classList.toggle('toggle');
        
        });
    });
};

const app = () => {
    newPage();
    navSlide();
};

app();
