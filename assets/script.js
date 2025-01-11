let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    console.log("Menu clicado!");
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
