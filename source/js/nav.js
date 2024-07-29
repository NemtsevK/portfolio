/**
 * инициализация меню навигации
 */
function initMenu() {
  const pattern = /(header)+/;
  const page = document.querySelector('.page');
  const header = page.querySelector('.header');

  const nav = page.querySelector('.nav');
  const navToggle = header.querySelector('.header__toggle-nav');

  const toggleMenu = () => {
    const isClosed = nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
    navToggle.classList.toggle('header__toggle-nav--active');
    navToggle.setAttribute('aria-label', isClosed ? 'Открыть меню' : 'Закрыть меню');
  }

  const onPageClick = ({ target }) => {
    if (pattern.test(target.className) === false && nav.classList.contains('nav--opened')) {
      toggleMenu();
    }
  }

  const onNavToggleClick = () => toggleMenu();

  navToggle.addEventListener('click', onNavToggleClick);
  page.addEventListener('click', onPageClick);
}

export { initMenu }
