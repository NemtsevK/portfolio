import { wrapGrid } from "https://cdn.skypack.dev/animate-css-grid@latest";
import { works } from './data/works.js';

function initWorksContainer() {
  const worksContainer = document.querySelector('.works__list');
  const workTemplate = document.querySelector('#work').content;
  const workItem = workTemplate.querySelector('.works__item');
  const worksFragment = document.createDocumentFragment();

  works.forEach((work) => {
    const { title, description, image, about, site, technologies, source } = work;
    const workElement = workItem.cloneNode(true);

    const workTechnologies = workElement.querySelector('.work__technologies')
    const workAbout = workElement.querySelector('.work__about')
    workElement.querySelector('.work__title').innerText = title;
    workElement.querySelector('.work__description').innerText = description;
    workElement.querySelector('.work__image').src = image;
    workElement.querySelector('.work__image').alt = title;

    workElement.querySelector('.work__button--site').href = site;
    workElement.querySelector('.work__button--source').href = source;

    about.forEach((item) => {
      const itemElement = document.createElement('p');
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

  worksContainer.addEventListener('click', (event) => {
    const targetElement = event.target;
    const workElement = targetElement.closest('.work');
    const workButtonClose = targetElement.closest('.work__button--close');

    if (workButtonClose) {
      fadeOut(workElement.querySelector('.work__about'), 250);
      fadeOut(workElement.querySelector('.work__footer'), 250);
      workElement.classList.remove('work--active');

      return;
    }

    if (workElement) {
      fadeIn(workElement.querySelector('.work__about'), 250);
      fadeIn(workElement.querySelector('.work__footer'), 250, 'flex');
      const workElementActive = worksContainer.querySelector('.work--active');

      if (workElementActive) {
        fadeOut(workElementActive.querySelector('.work__about'), 250);
        fadeOut(workElementActive.querySelector('.work__footer'), 250);
        workElementActive.classList.remove('work--active');
      }

      workElement.classList.add('work--active');
    }
  })

  wrapGrid(worksContainer);
}

/**
 * плавное появление элемента
 * @param element
 * @param timeout
 * @param display
 */
function fadeIn(element, timeout, display) {
  element.style.opacity = '0';
  element.style.display = display || 'block';
  element.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    element.style.opacity = '1';
  }, 10);
}

/**
 * плавное исчезание элемента
 * @param element
 * @param timeout
 */
function fadeOut(element, timeout) {
  element.style.opacity = '1';
  element.style.transition = `opacity ${timeout}ms`;
  element.style.opacity = '0';

  setTimeout(() => {
    element.style.display = 'none'
  }, timeout);
}

export { initWorksContainer }
