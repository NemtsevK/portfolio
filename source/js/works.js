import { works } from './data/works.js';

function initWorksContainer() {
  const worksContainer = document.querySelector('.works__list');
  const workTemplate = document.querySelector('#work').content;
  const workItem = workTemplate.querySelector('.works__item');
  const worksFragment = document.createDocumentFragment();

  works.forEach((work) => {
    const { id, title, description, image, site, technologies, visible } = work;
    const workElement = workItem.cloneNode(true);
    workElement.querySelector('.works__item-title').innerText = title;
    workElement.querySelector('.works__item-description').innerText = description;
    workElement.querySelector('.works__item-image').src = image;
    workElement.querySelector('.works__item-image').alt = title;
    workElement.querySelector('.works__item-link').href = site;
    workElement.querySelector('.works__item-input').value = id;

    if(visible === true) {
      workElement.classList.add('works__item--hidden');
    }

    technologies.forEach((technology) => {
      const technologiesItem = document.createElement('li');
      technologiesItem.classList.add('works__item-technology');
      technologiesItem.innerText = technology;
      workElement.querySelector('.works__item-technologies').appendChild(technologiesItem);
    })

    worksFragment.appendChild(workElement);
  });

  worksContainer.appendChild(worksFragment);
}

const button = document.querySelector('.works__button');
const worksItems = document.querySelectorAll('.works__item--hide');

let showItems = false;

const onButtonShowClick = () => {
  worksItems.forEach(item => item.classList.toggle('works__item--hide'));
  showItems = (showItems === false);
  button.textContent = (showItems === true) ? 'Скрыть' : 'Показать больше';
}

button.addEventListener('click', onButtonShowClick);

export { initWorksContainer }
