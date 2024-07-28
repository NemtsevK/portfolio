export function initMenu() {
  const nav = document.querySelector('.nav');
  const toggleNavInput = document.querySelector('.header__toggle-nav-checkbox');
  const navLinks = nav.querySelectorAll('.nav__link');

  const onToggleNavClick = (event) => {
    nav.classList.toggle('nav--opened');
    const textToggleNav = event.target.checked ? 'Закрыть меню' : 'Открыть меню';
    toggleNavInput.setAttribute('aria-label', textToggleNav);
  }

  const onNavLinkClick = () => {
    nav.classList.toggle('nav--opened');
    toggleNavInput.checked = false;
  }

  toggleNavInput.addEventListener('click', onToggleNavClick);

  navLinks.forEach(navLink => navLink.addEventListener('click', onNavLinkClick));
}
