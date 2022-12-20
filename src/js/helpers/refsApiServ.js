export const refs = {
  btnOpenRef: document.querySelector('[data-modal-open]'),
  btnOpenUserRef: document.querySelector('[data-modal-open-user]'),
  btnCloseRef: document.querySelector('[data-main-modal-close]'),
  btnCloseUserRef: document.querySelector('[data-user-modal-close]'),
  body: document.querySelector('body'),
  teamModal: document.querySelector('[data-team-modal]'),
  headerUserLink: document.querySelector('.menu__link-js'),
  form: document.querySelector('.form'),
  searchError: document.querySelector('.form__text-error'),
  pagRef: document.querySelector('.pagination'),
  currentPage: document.querySelector('#curr'),
  nextPage: document.querySelector('#next'),
  prevPage: document.querySelector('#prev'),
  firstPage: document.querySelector('#first-page'),
  lastPage: document.querySelector('#last-page'),
  beforeCurPageContainer: document.querySelector('.before-cur-page'),
  afterCurPageContainer: document.querySelector('.after-cur-page'),
  themeBtnRef: document.querySelector('.theme-btn'),
  lightIconRef: document.querySelector('.theme-light'),
  darkIconRef: document.querySelector('.theme-dark'),
  filmList: document.querySelector('.films__list'),
  btnScrollTopRef: document.querySelector('.btn__up'),
  btnScrollDownRef: document.querySelector('.btn__down'),
  footerRef: document.querySelector('.footer'),
  btnWatch: document.querySelector('.btn__watched'),
  btnQueue: document.querySelector('.btn__queue'),

  // enter refs of elements you want
  // like this ---> inputEl: document.querySelector('.header__search-form')  (EXAMPLE!!!)
};

// DONT TOUCH below
// -----------------------------------
// class refsApiServ {
//   constructor() {
//     this.el = {};
//   }
//   addRefs(refName, link) {
//     this.el = { [refName]: link };
//   }
// }
// const refs = new refsApiServ();
// refs.addRefs('inputEl', document.querySelector('.film-list'));
// console.log(refs.refs.inputEl);
// -----------------------------------
