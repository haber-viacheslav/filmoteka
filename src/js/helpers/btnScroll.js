import { refs } from './refsApiServ';
export {onScroll, onScrollToTopBtn, onScrollToDownBtn}
const footerRef = document.querySelector('.footer')
refs.btnScrollTopRef.addEventListener('click', onScrollToTopBtn);
refs.btnScrollDownRef.addEventListener('click', ()=>{onScrollToDownBtn(footerRef)});
window.addEventListener('scroll', onScroll)

function onScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled < coords) {
        refs.btnScrollTopRef.classList.add('btn__up--hidden');
        refs.btnScrollDownRef.classList.remove('btn__up--hidden');
    };
    if (scrolled > coords) {
        refs.btnScrollTopRef.classList.remove('btn__up--hidden');
        refs.btnScrollDownRef.classList.add('btn__up--hidden');
    };
};


function onScrollToTopBtn() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}

function onScrollToDownBtn(e) {
    window.scroll({ left: 0, top: e.offsetTop, behavior: 'smooth'});
}














// const btnUp = {
//   el: document.querySelector('.btn-up'),
//   show() {
//     // удалим у кнопки класс btn-up_hide
//     this.el.classList.remove('btn-up_hide');
//   },
//   hide() {
//     // добавим к кнопке класс btn-up_hide
//     this.el.classList.add('btn-up_hide');
//   },
//   addEventListener() {
//     // при прокрутке содержимого страницы
//     window.addEventListener('scroll', () => {
//       // определяем величину прокрутки
//       const scrollY = window.scrollY || document.documentElement.scrollTop;
//       // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
//       scrollY > 400 ? this.show() : this.hide();
//     });
//     // при нажатии на кнопку .btn-up
//     document.querySelector('.btn-up').onclick = () => {
//       // переместим в начало страницы
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//       });
//     }
//   }
// }
// btnUp.addEventListener();
// export default btnUp