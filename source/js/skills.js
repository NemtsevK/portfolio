import { skills } from './data/skills.js';
import { fadeIn, fadeOut } from './utils.js';

/**
 * инициализация контейнера с навыками
 */
function initSkillsContainer() {
  const skillsContainer = document.querySelector('.skills__list');
  const skillTemplate = document.querySelector('#skill').content;
  const skillItem = skillTemplate.querySelector('.skills__item');
  const skillsFragment = document.createDocumentFragment();

  const onSkillsContainerClick = ({ currentTarget }) => {
    const skill = skills.find((skill) => skill.name === currentTarget.name);
    setModal(skill);
  }

  skills.forEach((skill) => {
    const { name, text, title, about } = skill;
    const skillElement = skillItem.cloneNode(true);
    const imagePath = getImagePath(skill);

    const tagName = about === false ? 'div' : 'button';
    const className = about === false ? 'skills__item-content' : 'skills__item-button';
    const skillContent = document.createElement(tagName);
    const skillImage = document.createElement('img');
    const skillText = document.createElement('span');

    skillContent.classList.add(className);
    if (about !== false) {
      skillContent.name = name;
    }
    skillContent.title = title;

    skillImage.classList.add('skills__item-image');
    skillImage.src = imagePath;
    skillImage.alt = title;
    skillContent.append(skillImage);

    skillText.classList.add('skills__item-text');
    skillText.textContent = text;
    skillContent.append(skillText);

    skillElement.prepend(skillContent);
    skillsFragment.append(skillElement);

  });

  skillsContainer.append(skillsFragment);
  const skillsButtons = skillsContainer.querySelectorAll('.skills__item-button');
  skillsButtons.forEach((button) => button.addEventListener('click', onSkillsContainerClick));
}

/**
 * активизация модального окна
 * @param skill
 */
function setModal(skill) {
  const { title, about } = skill;
  const page = document.querySelector('.page');
  const modal = document.querySelector('.modal');
  const modalImage = modal.querySelector('.modal__image');
  const modalTitle = modal.querySelector('.modal__title');
  const modalAbout = modal.querySelector('.modal__about');
  const buttonClose = modal.querySelector('.modal__close');

  const closeModal = () => {
    fadeOut(modal, 200, () => {
      modal.close();
      modalTitle.innerText = '';
      modalAbout.innerText = '';
      page.classList.remove('page--scroll-lock');
    });
  }

  const onButtonClick = () => closeModal();

  const onModalClick = ({ currentTarget, target }) => {
    if (target === currentTarget) {
      closeModal();
    }
  }

  const onModalKeyDown = (event) => {
    if (event.code === 'Escape') {
      closeModal();
    }
  }

  page.classList.add('page--scroll-lock');

  fadeIn(modal, 200, () => {
    modal.showModal();
    modalImage.src = getImagePath(skill);
    modalImage.alt = title;
    modalTitle.innerText = title;

    about.forEach((item) => {
      const itemElement = document.createElement('li');
      itemElement.classList.add('modal__about-item');
      itemElement.innerText = item;
      modalAbout.appendChild(itemElement);
    })

    modal.addEventListener('click', onModalClick);
    modal.addEventListener('keydown', onModalKeyDown)
    buttonClose.addEventListener('click', onButtonClick);
  }, 'flex')
}

/**
 * установить картинки навыков
 */
function setSkillsImage() {
  const skillsImages = document.querySelectorAll('.skills__item-image');

  skillsImages.forEach((skillImage, index) => {
    skillImage.src = getImagePath(skills[index]);
  });
}

/**
 *
 * @param skill
 * @return string
 */
function getImagePath(skill) {
  const { image, darkTheme } = skill;
  const isDarkTheme = window.localStorage.getItem('theme') === 'dark';

  return (isDarkTheme === true && darkTheme === true) ? image.replace(/(\w+)\.svg$/, '$1-dark.svg') : image;
}

export { initSkillsContainer, setSkillsImage }
