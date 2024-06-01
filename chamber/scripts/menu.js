// set up hamburger menu
const hamMenu = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamMenu.addEventListener('click', () => {
    navigation.classList.toggle('closed');
    hamMenu.classList.toggle('closed');
});