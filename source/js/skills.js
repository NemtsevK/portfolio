import { skills } from './data/skills.js';

/**
 * инициализация контейнера с навыками
 */
function initSkillsContainer() {
  const skillsContainer = document.querySelector('.skills__list');
  const skillTemplate = document.querySelector('#skill').content;
  const skillItem = skillTemplate.querySelector('.skills__item');
  const skillsFragment = document.createDocumentFragment();

  const onSkillsContainerClick = ({ target }) => {
    if (target.tagName === 'BUTTON') {
      const skill = skills.find((skill) => skill.name === target.name);
      setModal(skill);
    }
  }

  skills.forEach((skill) => {
    const { name, title, about } = skill;
    const skillElement = skillItem.cloneNode(true);
    const imagePath = getImagePath(skill);

    const tagName = about === false ? 'div' : 'button';
    const className = about === false ? 'skills__item-picture' : 'skills__item-button';
    const skillPicture = document.createElement(tagName);

    skillPicture.classList.add(className);
    if(about !== false) {
      skillPicture.name = name;
    }
    skillPicture.title = title;
    skillPicture.ariaLabel = name;
    skillPicture.style.backgroundImage = `url("${imagePath}")`;

    skillElement.appendChild(skillPicture);
    skillsFragment.appendChild(skillElement);
  });

  skillsContainer.appendChild(skillsFragment);
  skillsContainer.addEventListener('click', onSkillsContainerClick);
}

/**
 * активизация модального окна
 * @param skill
 */
function setModal(skill) {
  const { title, image, about } = skill;
  const page = document.querySelector('.page');
  const modal = document.querySelector('.modal');
  const modalImage = modal.querySelector('.modal__image');
  const modalTitle = modal.querySelector('.modal__title');
  const modalAbout = modal.querySelector('.modal__about');
  const buttonClose = modal.querySelector('.modal__close');

  const closeModal = () => {
    modal.close();
    modalTitle.innerText = '';
    modalAbout.innerText = '';
    page.classList.remove('page--scroll-lock');
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
}

/**
 * установить картинки навыков
 */
function setSkillsImage() {
  const skillsElements = document.querySelectorAll('.skills__item-button, .skills__item-picture');

  skillsElements.forEach((skillElement, index) => {
    const imagePath = getImagePath(skills[index]);
    skillElement.style.backgroundImage = `url("${imagePath}")`;
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
