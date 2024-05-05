const page = document.querySelector('.page');
const nav = document.querySelector('.nav');
const toggleTheme = page.querySelector('.header__toggle-theme');
const toggleThemeInput = page.querySelector('.header__toggle-theme-checkbox');
const toggleNav = page.querySelector('.header__toggle-nav');
const toggleNavInput = page.querySelector('.header__toggle-nav-checkbox');

const button = document.querySelector('.works__button');
const worksItems = document.querySelectorAll('.works__item--hide');
const navLinks = nav.querySelectorAll('.nav__link');

const onToggleNavClick = (event) => {
  nav.classList.toggle('nav--opened');
  if (event.target.checked) {
    toggleNav.setAttribute('aria-label', 'Закрыть меню');
    toggleNav.setAttribute('title', 'Закрыть меню');
  } else {
    toggleNav.setAttribute('aria-label', 'Открыть меню');
    toggleNav.setAttribute('title', 'Открыть меню');
  }
}

const onToggleThemeClick = (event) => {
  const themeName = event.target.checked ? 'dark' : 'light';
  window.localStorage.setItem('theme', themeName);
  setTheme();
}

function setTheme() {
  let titleText;

  if (window.localStorage.getItem('theme') === 'dark') {
    page.classList.add('theme-dark');
    titleText = 'Светлая тема';
    toggleThemeInput.checked = true;
  } else {
    page.classList.remove('theme-dark');
    titleText = 'Тёмная тема';
    toggleThemeInput.checked = false;
  }
  toggleTheme.setAttribute('aria-label', titleText);
  toggleTheme.setAttribute('title', titleText);
}

const onNavLinkClick = () => {
  nav.classList.toggle('nav--opened');
  toggleNav.checked = false;
}

setTheme();

page.classList.remove('page--nojs');
toggleNavInput.addEventListener('click', onToggleNavClick);
toggleThemeInput.addEventListener('click', onToggleThemeClick);
navLinks.forEach(navLink => navLink.addEventListener('click', onNavLinkClick));

let showItems = false;

const onButtonShowClick = () => {
  worksItems.forEach(item => item.classList.toggle('works__item--hide'));
  showItems = (showItems === false);
  button.textContent = (showItems === true) ? 'Скрыть' : 'Показать больше';
}

button.addEventListener('click', onButtonShowClick);
