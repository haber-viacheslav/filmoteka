export const refs = {
  btnOpenRef: document.querySelector('[data-modal-open]'),
  btnOpenUserRef: document.querySelector('[data-modal-open-user]'),
  btnCloseRef: document.querySelector('[data-modal-close]'),
  body: document.querySelector('body'),
  teamModal: document.querySelector('[data-modal]'),
  teamLinks: document.querySelectorAll('.team-modal__link'),
  form: document.querySelector('.form'),
  searchError: document.querySelector('.form__text-error'),
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
