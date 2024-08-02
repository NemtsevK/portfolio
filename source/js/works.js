import { wrapGrid } from "https://cdn.skypack.dev/animate-css-grid@latest";
import { works } from './data/works.js';

/**
 * инициализация контейнера с проектами
 */
function initWorksContainer() {
  const worksContainer = document.querySelector('.works__list');
  const worksButton = document.querySelector('.works__button');

  setWorksContainer();

  const onWorksContainerClick = (event) => {
    const workElement = event.target.closest('.work');
    const workButtonClose = event.target.closest('.work__button--close');

    if (workButtonClose) {
      workElement.classList.remove('work--active');
      workElement.tabIndex = '0';
      return;
    }

    showActiveContainer(workElement, worksContainer);
  }

  const onWorksContainerKeyUp = (event) => {
    if (event.code === 'Enter') {
      showActiveContainer(event.target, worksContainer);
    }
  }

  const onWorksButtonClick = ({ target }) => {
    const isActive = target.classList.contains('works__button--active');
    target.classList.toggle('works__button--active');

    const worksItem = document.querySelectorAll('.work');

    worksItem.forEach((item, index) => {
      if (works[index].visible === false) {
        item.classList.toggle('work--hidden');
      }
    })

    target.textContent = isActive === true ? 'Показать больше' : 'Скрыть';
  }

  worksContainer.addEventListener('click', onWorksContainerClick);
  worksContainer.addEventListener('keyup', onWorksContainerKeyUp);
  worksButton.addEventListener('click', onWorksButtonClick)
}

function setWorksContainer() {
  const worksContainer = document.querySelector('.works__list');
  const workTemplate = document.querySelector('#work').content;
  const workItem = workTemplate.querySelector('.work');
  const worksFragment = document.createDocumentFragment();

  works.forEach(({ title, description, image, about, site, technologies, source, visible }) => {
    const workElement = workItem.cloneNode(true);
    const workTechnologies = workElement.querySelector('.work__technologies');
    const workAbout = workElement.querySelector('.work__about');

    workElement.querySelector('.work__title').innerText = title;
    workElement.querySelector('.work__description').innerText = description;
    workElement.querySelector('.work__image').src = image;
    workElement.querySelector('.work__image').alt = title;

    workElement.querySelector('.work__button--site').href = site;
    workElement.querySelector('.work__button--source').href = source;

    if (visible === false) {
      workElement.classList.add('work--hidden');
    }

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
  });

  worksContainer.appendChild(worksFragment);
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

export { initWorksContainer }
