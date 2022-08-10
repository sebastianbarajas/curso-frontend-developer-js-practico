const navBar = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');

navBar.addEventListener('click',toggleDeskMenu);


function toggleDeskMenu(){
    deskMenu.classList.toggle('inactive');
}