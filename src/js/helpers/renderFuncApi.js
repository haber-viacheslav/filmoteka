import refsApiServ from './refsApiServ';
const refs = refsApiServ;

class RenderApi {
  constructor() {}

  createFilmCardsMarkup(data) {
    return data
      .map(
        ({}) => `
    `
      )
      .join('');
  }
  createLibraryFilmCardsMarkup(data) {
    return data
      .map(
        ({}) =>
          `
        
    `
      )
      .join('');
  }
  createMoreFilmDetails(data) {
    return data
      .map(
        ({}) =>
          `
        
    `
      )
      .join('');
  }
  renderMarkup({
    selector,
    innerHtml = false,
    innerHTMLMarkup = '',
    insAdHtmltype = 'beforeend',
    createMarkypFunc,
  }) {
    const elem = document.querySelector(selector);
    // console.log();
    if (innerHtml) {
      elem.innerHTML = innerHTMLMarkup;
    }
    elem.insertAdjacentHTML(insAdHtmltype, createMarkypFunc);
  }
}

export default RenderApi;
//  <div class="example">
//
// </div>;
