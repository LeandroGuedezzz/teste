const iconeMenu =document.querySelector("#menu-icon");
const navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


iconeMenu.onclick =()=>{
    iconeMenu.classList.toggle('bx-x');
    navbar.classList.toggle('ativo');
}