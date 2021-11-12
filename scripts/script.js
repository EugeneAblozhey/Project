
// Изменение картинки при наведении

const changeImage = (e, newImage) => {
    if(e.target.tagName === 'IMG'){
        e.target.src = newImage;
    }
    if(e.target.tagName === 'A'){
        e.target.firstElementChild.src = newImage;
    }
    if(e.target.tagName === 'SPAN'){
        e.target.previousElementSibling.src = newImage;
    }
}

document.querySelector('.header__logo').addEventListener('mouseover', (e) => {
    changeImage(e, 'images/logos/logo-hover.svg');
})
document.querySelector('.header__logo').addEventListener('mouseout', (e) => {
    changeImage(e, 'images/logos/logo.svg');
})
document.querySelector('.header__search').addEventListener('mouseover', (e) => {
    changeImage(e, 'images/icons/icons-header-desctop/desctop_search-hover.svg');
})
document.querySelector('.header__search').addEventListener('mouseout', (e) => {
    changeImage(e, 'images/icons/icons-header-desctop/desctop_search.svg');
})
document.querySelector('.header__fav-link').addEventListener('mouseover', (e) => {
    changeImage(e, 'images/icons/icons-header-desctop/desktop_favourite-hover.svg');
})
document.querySelector('.header__fav-link').addEventListener('mouseout', (e) => {
    changeImage(e, 'images/icons/icons-header-desctop/desktop_favourite.svg');
})
document.querySelector('.header__cart-link').addEventListener('mouseover', (e) => {
    changeImage(e, 'images/icons/icons-header-desctop/desctop_bag-hover.svg');
})
document.querySelector('.header__cart-link').addEventListener('mouseout', (e) => {
    changeImage(e, 'images/icons/icons-header-desctop/desctop_bag.svg');
})
document.querySelector('.new-products__button_show-all').addEventListener('mouseover', (e) => {
    changeImage(e, 'images/buttons/button_show-all-red.svg');
})
document.querySelector('.new-products__button_show-all').addEventListener('mouseout', (e) => {
    changeImage(e, 'images/buttons/button_show-all-pink.svg');
})
document.querySelector('.top-products__button_show-all').addEventListener('mouseover', (e) => {
    changeImage(e, 'images/buttons/button_show-all-red.svg');
})
document.querySelector('.top-products__button_show-all').addEventListener('mouseout', (e) => {
    changeImage(e, 'images/buttons/button_show-all-pink.svg');
})
document.querySelector('.costumes__button-show-all').addEventListener('mouseover', (e) => {
    changeImage(e, 'images/buttons/button_show-all-red.svg');
})
document.querySelector('.costumes__button-show-all').addEventListener('mouseout', (e) => {
    changeImage(e, 'images/buttons/button_show-all-pink.svg');
})
document.querySelector('.info__button-open-maps').addEventListener('mouseover', (e) => {
    changeImage(e, 'images/buttons/button_navigate-red.svg');
})
document.querySelector('.info__button-open-maps').addEventListener('mouseout', (e) => {
    changeImage(e, 'images/buttons/button_navigate-pink.svg');
})


// BurgerMenu

document.querySelector('.mobile-menu__burger-button').addEventListener('click', (e) => {
    e.preventDefault();
    const burger = document.querySelector('.burger');
    burger.classList.remove('display-none');
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
})
document.querySelector('.burger__close-button').addEventListener('click', (e) => {
    e.preventDefault();
    const burger = document.querySelector('.burger');
    burger.classList.add('display-none');
    const body = document.querySelector('body');
    body.classList.remove('overflow-hidden');
})
document.querySelector('.sub-menu__link').addEventListener('click', (e) => {
    e.preventDefault();
    const subMenu = document.querySelector('.sub-menu');
    subMenu.classList.remove('display-none');
})
document.querySelector('.sub-menu__close-button').addEventListener('click', (e) => {
    e.preventDefault();
    const subMenu = document.querySelector('.sub-menu');
    subMenu.classList.add('display-none');
    const burger = document.querySelector('.burger');
    burger.classList.add('display-none');
    const body = document.querySelector('body');
    body.classList.remove('overflow-hidden');
})
document.querySelector('.comeback-link').addEventListener('click', (e) => {
    e.preventDefault();
    const subMenu = document.querySelector('.sub-menu');
    subMenu.classList.add('display-none');
})






















