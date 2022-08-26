//Nav styles on scroll

// Open menu & search pop-up

const menuToggleIcon = document.querySelector('#menu-toggle-icon');

const menuToggle = () => {
    const mobileMenu = document.querySelector('.menu')
    mobileMenu.classList.toggle('activated')
    menuToggleIcon.classList.toggle('activated')
}

menuToggleIcon.addEventListener('click', menuToggle);

// Open/Close search form popup

const searchOpenBtn = document.querySelector('#search-btn')
const searchCloseBtn = document.querySelector('#searchClose-btn')
const searchInput = document.querySelector('.form-input')
const searchContainer = document.querySelector('#search-form-container')

searchOpenBtn.addEventListener('click', () => searchContainer.classList.add('activated'))
searchCloseBtn.addEventListener('click', () => searchContainer.classList.remove('activated'))

// -- Close the search form popup on ESC keypress

window.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
        searchContainer.classList.remove('activated');
    }
})

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = document.querySelector('#theme-toggle-btn');

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme')
})




// Swiper

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiperpagination'
    },
    breakpoints: {
        700: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
});