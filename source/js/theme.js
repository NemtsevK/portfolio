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

export { setTheme }
