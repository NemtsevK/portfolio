import { skills } from './data/skills.js';

function initSkillsContainer() {
  const skillsContainer = document.querySelector('.skills__list');
  const skillTemplate = document.querySelector('#skill').content;
  const skillItem = skillTemplate.querySelector('.skills__item');
  const skillsFragment = document.createDocumentFragment();

  skills.forEach((skill) => {
    const { name, image, link } = skill;
    const skillElement = skillItem.cloneNode(true);
    skillElement.querySelector('.skills__item-link').title = name;
    skillElement.querySelector('.skills__item-link').ariaLabel = name;
    skillElement.querySelector('.skills__item-link').href = link;
    skillElement.querySelector('.skills__item-link').style.backgroundImage = `url("${image}")`;
    skillsFragment.appendChild(skillElement);
  });

  skillsContainer.appendChild(skillsFragment);
}

export { initSkillsContainer }
