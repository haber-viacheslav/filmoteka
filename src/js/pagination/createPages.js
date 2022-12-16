import { refs } from '../helpers/refsApiServ';

export function createPages(page, totalPages) {
  let beforeContainer = ``;
  let afterContainer = ``;

  // Before
  if (page >= 5) {
    beforeContainer += `<div class="numb numb--first-page" data-numb-id='1'>1</div>`;
  }

  if (page === 4 || page === 5) {
    beforeContainer += `<div class="numb dots" data-numb-id='${page - 3}'>${
      page - 3
    }</div>`;
  } else if (page >= 6) {
    beforeContainer += `<div class="dots">...</div>`;
  }

  if (page >= 3) {
    beforeContainer += `<div class="numb" data-numb-id='${page - 2}'>${
      page - 2
    }</div>`;
  }

  if (page >= 2) {
    beforeContainer += `<div class="numb" data-numb-id='${page - 1}'>${
      page - 1
    }</div>`;
  }

  // After
  if (page <= totalPages - 1) {
    afterContainer += `<div class="numb" data-numb-id='${page + 1}'>${
      page + 1
    }</div>`;
  }

  if (page <= totalPages - 2) {
    afterContainer += `<div class="numb" data-numb-id='${page + 2}'>${
      page + 2
    }</div>`;
  }

  if (page === totalPages - 3 || page === totalPages - 4) {
    afterContainer += `<div class="numb dots" data-numb-id='${page + 3}'>${
      page + 3
    }</div>`;
  } else if (page <= totalPages - 5) {
    afterContainer += `<div class="dots">...</div>`;
  }

  if (page <= totalPages - 4) {
    afterContainer += `<div class="numb numb--last-page" data-numb-id='${totalPages}'>${totalPages}</div>`;
  }

  // DOM
  refs.beforeCurPageContainer.innerHTML = beforeContainer;
  refs.afterCurPageContainer.innerHTML = afterContainer;
}
