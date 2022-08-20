let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.oneclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.oneclick = () =>{
    searchIcon.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
}

window.onescroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove('active');
}