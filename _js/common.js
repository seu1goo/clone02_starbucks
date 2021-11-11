if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
};

const mobMenu = document.querySelector('header .mobMenu');
const mobMenuClose = document.querySelector('header .mobClose');
const nav = document.querySelector('header .mainMenu');

if (window.matchMedia("max-width: 640px")) {
  mobMenu.addEventListener('click', function() {
    nav.classList.add('slide-left')
  })
  mobMenuClose.addEventListener('click', function() {
    nav.classList.remove('slide-left')
  })
}
// header

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});
//search

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
//footer