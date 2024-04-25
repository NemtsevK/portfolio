const button = document.querySelector('.works__button');
const worksItems = document.querySelectorAll('.works__item--hide');

let showItems = false;

const onButtonShowClick = () => {

  worksItems.forEach(function (item) {
    item.classList.toggle('works__item--hide');
  })

  showItems = (showItems === false);
  button.textContent = (showItems === true) ? 'Скрыть' : 'Показать больше';
}

button.addEventListener('click', onButtonShowClick);
