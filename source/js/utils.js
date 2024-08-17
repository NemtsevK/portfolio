/**
 * функция, которая вызывает другую функцию, «пропуская» некоторые вызовы с определённой периодичностью.
 * @param callee - функция, которую надо вызывать
 * @param timeout - интервал в мс, с которым следует пропускать вызовы
 * @return {perform}
 */
function throttle(callee, timeout) {
  // Таймер будет определять, надо ли нам пропускать текущий вызов.
  let timer = null

  // Как результат возвращаем другую функцию.
  // Это нужно, чтобы мы могли не менять другие части кода,
  return function perform(...args) {
    // Если таймер есть, то функция уже была вызвана, и значит новый вызов следует пропустить.
    if (timer) return

    // Если таймера нет, значит мы можем вызвать функцию:
    timer = setTimeout(() => {
      // Аргументы передаём неизменными в функцию-аргумент:
      callee(...args)

      // По окончании очищаем таймер:
      clearTimeout(timer)
      timer = null
    }, timeout)
  }
}

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

export { throttle, fadeIn, fadeOut }
