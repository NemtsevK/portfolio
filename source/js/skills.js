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
    const { name, title, image } = skill;
    const skillElement = skillItem.cloneNode(true);
    skillElement.querySelector('.skills__item-button').name = name;
    skillElement.querySelector('.skills__item-button').title = title;
    skillElement.querySelector('.skills__item-button').ariaLabel = name;
    skillElement.querySelector('.skills__item-button').style.backgroundImage = `url("${image}")`;
    skillsFragment.appendChild(skillElement);
  });

  skillsContainer.appendChild(skillsFragment);
  skillsContainer.addEventListener('click', onSkillsContainerClick);

  setSkillsImage();
}

/**
 * активизация модального окна
 * @param title
 * @param image
 * @param about
 */
function setModal({ title, image, about }) {
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
  modalImage.src = image;
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
  const isDarkTheme = window.localStorage.getItem('theme') === 'dark';
  const skillsElements = document.querySelectorAll('.skills__item-button');

  skillsElements.forEach((skillElement, index) => {
    let imagePath;

    if (isDarkTheme === true && skills[index].darkTheme === true) {
      imagePath = skills[index].image.replace(/(\w+)\.svg$/, '$1-dark.svg');
    } else {
      imagePath = skills[index].image;
    }

    skillElement.style.backgroundImage = `url("${imagePath}")`;
  });
}

export { initSkillsContainer, setSkillsImage }
