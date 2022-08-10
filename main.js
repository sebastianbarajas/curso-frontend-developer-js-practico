const navBar = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const btnMenuMobile = document.querySelector('.menu');

navBar.addEventListener('click',toggleDeskMenu);
btnMenuMobile.addEventListener('click', toggleMovileMenu);


function toggleDeskMenu(){
    deskMenu.classList.toggle('inactive');
}

function toggleMovileMenu(){
    mobileMenu.classList.toggle('inactive');
}