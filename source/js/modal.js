import { works } from './data/works.js';

const body = document.querySelector('.page__body');

function removeElements(parent, child) {
  const parentElement = document.querySelector(parent);
  const childrenElements = document.querySelectorAll(child);
  childrenElements.forEach((element) => {
    parentElement.removeChild(element);
  })
}

function clearModal() {
  body.classList.remove('page__body--scroll-lock');
  removeElements('.modal__technologies', '.modal__technology');
  removeElements('.modal__about', '.modal__about-item');
}

export function initModal() {
  const modal = document.querySelector('.modal');
  const worksItems = document.querySelectorAll('.works__item-link');
  const modalClose = document.querySelector('.modal__close');

  const onModalCloseClick = () => {
    modal.close();
    clearModal();
  }

  const onBackDropClick = ({ currentTarget, target }) => {
    if (target === modal) {
      currentTarget.close();
      clearModal();
    }
  }

  const onEscapeKeydown = (event) => {
    if (event.key === 'Escape' && modal.open) {
      clearModal();
    }
  }

  modal.addEventListener('click', onBackDropClick);
  document.addEventListener('keydown', onEscapeKeydown);
  modalClose.addEventListener('click', onModalCloseClick);

  worksItems.forEach((work) => {

    work.addEventListener('click', () => {
      const modalTechnologies = modal.querySelector('.modal__technologies');
      const modalAbout = modal.querySelector('.modal__about');
      const input = work.querySelector('.works__item-input');
      const id = input.value;
      const workFind = works.find(work => work.id === id);
      const { title, description, about, site, source, image, technologies } = workFind

      modal.showModal();
      modal.querySelector('.modal__title').innerText = title;
      modal.querySelector('.modal__description').innerText = description;
      modal.querySelector('.modal__link--site').href = site;
      modal.querySelector('.modal__link--source').href = source;
      modal.querySelector('.modal__link-image').href = site;
      modal.querySelector('.modal__image').src = image;
      modal.querySelector('.modal__image').alt = title;

      about.forEach((item) => {
        const itemElement = document.createElement('p');
        itemElement.classList.add('modal__about-item');
        itemElement.innerText = item;
        modalAbout.appendChild(itemElement);
      })

      technologies.forEach((technology) => {
        const technologyElement = document.createElement('li');
        technologyElement.classList.add('modal__technology');
        technologyElement.innerText = technology;
        modalTechnologies.appendChild(technologyElement);
      })

      body.classList.add('page__body--scroll-lock');
    })
  })
}
