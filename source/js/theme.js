import { setSkillsImage } from './skills.js';

/**
 * инициализация темы сайта
 */
function initTheme() {
  const toggleTheme = document.querySelector('.header__toggle-theme');

  const onToggleThemeClick = (event) => {
    const isDarkTheme = window.localStorage.getItem('theme') === 'dark';
    const themeName = isDarkTheme === true ? 'light' : 'dark';

    window.localStorage.setItem('theme', themeName);
    setTheme(event.target);
  }

  setTheme(toggleTheme);
  toggleTheme.addEventListener('click', onToggleThemeClick);
}

/**
 * активизировать тему сайта
 * @param toggle
 */
function setTheme(toggle) {
  const page = document.querySelector('.page');
  const isDarkTheme = window.localStorage.getItem('theme') === 'dark';
  const titleText = isDarkTheme === true ? 'Переключиться на светлую тему' : 'Переключиться на тёмную тему';

  if (isDarkTheme === true) {
    page.classList.add('theme-dark');
  } else {
    page.classList.remove('theme-dark');
  }

  toggle.setAttribute('aria-label', titleText);
  toggle.setAttribute('title', titleText);

  setSkillsImage();
}

export { initTheme }
