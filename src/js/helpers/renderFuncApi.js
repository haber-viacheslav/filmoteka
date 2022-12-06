import refsApiServ from './refsApiServ';
const refs = refsApiServ;

class RenderApi {
  constructor() {}

  createMarkup(data) {
    return data
      .map(
        ({}) => `
        

    `
      )
      .join('');
  }
  renderMarkup(params) {}
}

export {};
