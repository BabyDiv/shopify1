
const container = document.querySelector('.main-header');

const burger = container.querySelector('.main-header__burger');
const iconOpen = container.querySelector('.main-header__icon-open');
const iconClose = container.querySelector('.main-header__icon-close');
const nav = container.querySelector('.main-header__nav');
const logo = container.querySelector('.main-header__logo');

const open = () => {
  nav.classList.add('main-header__nav--active');
  iconClose.classList.add('main-header__burger--open');
  iconOpen.classList.add('main-header__burger--close');
  logo.classList.add('main-header__logo--hidden');
  console.log('hello');
}

const close = () => {
  nav.classList.remove('main-header__nav--active');
  iconClose.classList.remove('main-header__burger--open');
  iconOpen.classList.remove('main-header__burger--close');
  logo.classList.remove('main-header__logo--hidden');
  console.log('hello');
}

const isOpen = () => {
  return nav.classList.contains('main-header__nav--active')
}

const handleBurgerClick = () => {
  isOpen() ? close() : open();
}

burger.addEventListener('click', handleBurgerClick);