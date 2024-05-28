import {works} from './data/works.js';

export function initModal() {
  const modal = document.querySelector('.modal');
  const worksItems = document.querySelectorAll('.works__item-link');
  const body = document.querySelector('.page__body');

  worksItems.forEach((work) => {
    console.log('click');
    work.addEventListener('click', (event) => {
      const input = work.querySelector('.works__item-input');
      const id = input.value;
      const workFind = works.find(work => work.id === id);
      modal.showModal();
      modal.querySelector('.modal__title').innerText = workFind.title;
      modal.querySelector('.modal__link-site').href = workFind.site;
      modal.querySelector('.modal__link-source').href = workFind.source;
      body.classList.add('page__body--scroll-lock');
    })
  })

  document.querySelector('#close').onclick = function () {
    modal.close();
    body.classList.remove('page__body--scroll-lock');
  }
}
