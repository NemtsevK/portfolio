import { setTheme } from './theme.js';
import './nav.js';
import { initSkillsContainer, replaceSkillsImage } from './skills.js';
import { initWorksContainer } from './works.js';
import { initModal } from './modal.js';

const page = document.querySelector('.page');
page.classList.remove('page--nojs');

initSkillsContainer();
initWorksContainer();
setTheme();
initModal();
