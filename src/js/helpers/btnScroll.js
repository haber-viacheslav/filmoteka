import { refs } from './refsApiServ';
export { onScroll, onScrollToTopBtn, onScrollToDownBtn };
    

refs.btnScrollTopRef.addEventListener('click', onScrollToTopBtn);
refs.btnScrollDownRef.addEventListener('click', () => {
  onScrollToDownBtn(refs.footerRef);
});
window.addEventListener('scroll', onScroll);

refs.btnScrollTopRef.classList.add('btn__up--hidden');
refs.btnScrollDownRef.classList.add('btn__up--hidden');
function onScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled < coords) {
    refs.btnScrollTopRef.classList.add('btn__up--hidden');
    refs.btnScrollDownRef.classList.remove('btn__up--hidden');
  }
  if (scrolled > coords) {
    refs.btnScrollTopRef.classList.remove('btn__up--hidden');
    refs.btnScrollDownRef.classList.add('btn__up--hidden');
  }
}

function onScrollToTopBtn() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function onScrollToDownBtn(e) {
  window.scroll({ left: 0, top: e.offsetTop, behavior: 'smooth' });
}
