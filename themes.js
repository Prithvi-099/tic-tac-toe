const lightmode = document.querySelector(".lightmode");
const darkmode = document.querySelector(".darkmode");
const retro = document.querySelector(".retro");
const body = document.querySelector('body');

const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar');



toggleButton.addEventListener('click',()=>{
    navbar.classList.toggle('active');
})






 body.classList.add('lightmode');



lightmode.addEventListener('click',()=>{
    body.classList.remove('darkmode');
    body.classList.remove('retro');
    body.classList.add('lightmode');
});



darkmode.addEventListener('click',()=>{
    body.classList.remove('retro');
    body.classList.remove('lightmode');
    body.classList.add('darkmode');
});


retro.addEventListener('click',()=>{
    body.classList.remove('darkmode');
    body.classList.remove('lightmode');
    body.classList.add('retro');
});