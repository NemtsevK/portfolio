import { replaceSkillsImage } from './skills.js';

const page = document.querySelector('.page');
const toggleTheme = page.querySelector('.header__toggle-theme');
const toggleThemeInput = page.querySelector('.header__toggle-theme-checkbox');

const onToggleThemeClick = (event) => {
  const themeName = event.target.checked ? 'dark' : 'light';
  window.localStorage.setItem('theme', themeName);
  setTheme();
}

toggleThemeInput.addEventListener('click', onToggleThemeClick);

function setTheme() {
  const isDarkTheme = window.localStorage.getItem('theme') === 'dark';
  const titleText = isDarkTheme === true ? 'Переключиться на светлую тему' : 'Переключиться на тёмную тему';

  if (isDarkTheme) {
    page.classList.add('theme-dark');
  } else {
    page.classList.remove('theme-dark');
  }

  toggleThemeInput.checked = isDarkTheme;
  replaceSkillsImage(isDarkTheme);

  toggleTheme.setAttribute('aria-label', titleText);
  toggleTheme.setAttribute('title', titleText);
}

export { setTheme }
