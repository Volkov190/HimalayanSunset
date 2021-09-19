const menuOpenButton = document.querySelector('.header__menu-button');
const headerBottom = document.querySelector('.header__bottom');
const minMenuIcon = document.querySelector('.menu-button__minimize-icon');

function openMenu(ev) {
    // console.log(headerBottom);
    headerBottom.classList.toggle('header__bottom_closed');
    minMenuIcon.classList.toggle('menu-button__minimize-icon_closed');
}

menuOpenButton.addEventListener('click', openMenu);