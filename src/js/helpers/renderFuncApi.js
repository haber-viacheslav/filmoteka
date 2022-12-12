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
  //1 - Enter your selector like: ".films-list",
  //2 - Enter true or false to activate innerHtml before insertAdjacentHTML
  //3- Enter innerHtml value for default use -  ''
  //4 - Enter insertAdjecentHtml type for default use - 'beforeend'
  //5 - Enter createMarkup function that already has been created and put into parameters data as you need! like: { createMarkypFunc:  createMoreFi lmDetails(fetchToFilmsData()) }
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
