/**
 * плавное появление элемента
 * @param element
 * @param timeout
 * @param cd
 * @param display
 */
function fadeIn(element, timeout, cd = () => {}, display = 'block') {
  element.style.opacity = '0';
  element.style.display = display;
  element.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    element.style.opacity = '1'
    cd();
  }, 10);
}

/**
 * плавное исчезание элемента
 * @param element
 * @param timeout
 * @param cd
 */
function fadeOut(element, timeout, cd = () => {}) {
  if(element !== null) {
    element.style.opacity = '1';
    element.style.transition = `opacity ${timeout}ms`;
    element.style.opacity = '0';
    setTimeout(() => {
      element.style.display = 'none';
      cd();
    }, timeout);
  }
}

export { fadeIn, fadeOut }
