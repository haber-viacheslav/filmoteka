import refsApiServ from './refsApiServ';
const refs = refsApiServ;

class RenderApi {
  constructor() {
    this.markup = ``;
  }

  createMarkup(data, markup) {
    return data.map(({}) => markup).join('');
  }
  renderMarkup({
    selector,
    innerHtml = false,
    data,
    insAdHtmltype = 'beforeend',
  }) {
    const elem = document.querySelector(selector);
    if (innerHtml) {
      elem.innerHTML = '';
    }
    elem.insertAdjacentHTML(
      insAdHtmltype,
      this.createMarkup(data, this.markup)
    );
  }
  get actualMarkup() {
    return this.markup;
  }
  set actualMarkup(newMarkup) {
    this.markup = newMarkup;
  }
}

export default RenderApi;
