const nav = document.querySelector('.nav');
const toggleNavInput = document.querySelector('.header__toggle-nav-checkbox');
const navLinks = nav.querySelectorAll('.nav__link');

const onToggleNavClick = (event) => {
  nav.classList.toggle('nav--opened');
  const textToggleNav = event.target.checked ? 'Закрыть меню' : 'Открыть меню';
  toggleNavInput.setAttribute('aria-label', textToggleNav);
}

toggleNavInput.addEventListener('click', onToggleNavClick);

const onNavLinkClick = () => {
  nav.classList.toggle('nav--opened');
  toggleNavInput.checked = false;
}

navLinks.forEach(navLink => navLink.addEventListener('click', onNavLinkClick));
