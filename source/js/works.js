import { wrapGrid } from "https://cdn.skypack.dev/animate-css-grid@latest";
import { works } from './data/works.js';

const COUNT_WORKS_SHOW = 6;
const TIME_ANIMATION = 1000;

/**
 * инициализация контейнера с проектами
 */
function initWorksContainer() {
  const worksContainer = document.querySelector('.works__list');
  const worksButton = document.querySelector('.works__button');

  setWorksContainer();
  worksContainer.addEventListener('click', onWorksContainerClick);
  worksContainer.addEventListener('keyup', onWorksContainerKeyUp);
  worksButton.addEventListener('click', onWorksButtonClick)
}

/**
 * установить контейнер с проектами
 */
function setWorksContainer() {
  const worksContainer = document.querySelector('.works__list');
  const workTemplate = document.querySelector('#work').content;
  const workItem = workTemplate.querySelector('.work');
  const worksFragment = document.createDocumentFragment();

  works.forEach((work, index) => {
    if (index < COUNT_WORKS_SHOW) {
      addWork(worksFragment, workItem, work, true)
    }
  });

  worksContainer.appendChild(worksFragment);
}

/**
 * добавить DOM-элемент проекта
 * @param worksFragment
 * @param workItem
 * @param work
 * @param {boolean} first
 */
function addWork(worksFragment, workItem, work, first = false) {
  const { title, description, image, about, site, technologies, source } = work;
  const workElement = workItem.cloneNode(true);
  const workTechnologies = workElement.querySelector('.work__technologies');
  const workAbout = workElement.querySelector('.work__about');

  if (first === false) workElement.style.animationName = 'slide-work-down';

  workElement.querySelector('.work__title').innerText = title;
  workElement.querySelector('.work__description').innerText = description;
  workElement.querySelector('.work__image').src = image;
  workElement.querySelector('.work__image').alt = title;
  workElement.querySelector('.work__button--site').href = site;
  workElement.querySelector('.work__button--source').href = source;

  about.forEach((item) => {
    const itemElement = document.createElement('li');
    itemElement.classList.add('work__about-item');
    itemElement.innerText = item;
    workAbout.appendChild(itemElement);
  })

  technologies.forEach((technology) => {
    const technologiesItem = document.createElement('li');
    technologiesItem.classList.add('work__technology');
    technologiesItem.innerText = technology;
    workTechnologies.appendChild(technologiesItem);
  })

  worksFragment.appendChild(workElement);
}

/**
 * контейнеры с проектом сделать активным
 * @param workElement
 * @param worksContainer
 */
function showActiveContainer(workElement, worksContainer) {
  if (workElement && workElement.classList.contains('work--active') === false) {
    wrapGrid(worksContainer);
    const workElementActive = worksContainer.querySelector('.work--active');

    if (workElementActive) {
      workElementActive.classList.remove('work--active');
      workElementActive.tabIndex = '0';
    }

    workElement.classList.add('work--active');
    workElement.tabIndex = '-1';
  }
}

function onWorksButtonClick({ target }) {
  const worksContainer = document.querySelector('.works__list');
  const worksElements = worksContainer.querySelectorAll('.work');

  if (target.value === 'show') {
    const workTemplate = document.querySelector('#work').content;
    const workItem = workTemplate.querySelector('.work');
    const worksFragment = document.createDocumentFragment();

    works.forEach((work, index) => {
      if (index >= worksElements.length && index < COUNT_WORKS_SHOW + worksElements.length) {
        addWork(worksFragment, workItem, work);
      }
    });

    worksContainer.appendChild(worksFragment);

    const worksElementsNew = worksContainer.querySelectorAll('.work');

    if (worksElementsNew.length === works.length) {
      target.value = 'hide';
      target.textContent = 'Скрыть';
    }
  } else {
    worksElements.forEach((workElement, index) => {
      if (index >= COUNT_WORKS_SHOW) {
        workElement.style.animationName = 'slide-work-up';
        setTimeout(() => workElement.remove(), TIME_ANIMATION)
      }
    });

    target.value = 'show';
    target.textContent = 'Показать больше';
  }
}

function onWorksContainerClick(event) {
  const worksContainer = document.querySelector('.works__list');
  const workElement = event.target.closest('.work');
  const workButtonClose = event.target.closest('.work__button--close');

  if (workButtonClose) {
    workElement.classList.remove('work--active');
    workElement.tabIndex = '0';
    return;
  }

  showActiveContainer(workElement, worksContainer);
}

function onWorksContainerKeyUp(event) {
  const worksContainer = document.querySelector('.works__list');
  if (event.code === 'Enter') {
    showActiveContainer(event.target, worksContainer);
  }
}

export { initWorksContainer }
