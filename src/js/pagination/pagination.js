// import { Pagination } from 'tui-pagination';
// const container = document.querySelector('#tui-pagination-container');
// const myPagination = new Pagination(container, {
//   // Total number of items
//   totalItems: 10,
//   // Items per page
//   itemsPerPage: 10,
//   // Visible pages
//   visiblePages: 10,
//   // Current page
//   page: 1,
//   // center aligned
//   centerAlign: false,
//   // default classes
//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',
//   // enable usage statistics
//   usageStatistics: true,
// });

// https://www.cssscript.com/pagination-component-tui/
// https://nhn.github.io/tui.pagination/latest/Pagination#getCurrentPage

import { fetchApi } from '../..';
import { renderApi } from '../..';
import { renderMarkup } from '../main/renderMainMarkup';

let page = 1;
let totalPages = null;

export function onShowPrevPage(e) {
  if (fetchApi.actualPage === 1) {
    return;
  }

  const currentPage = document.querySelector('#curr');
  const nextPage = document.querySelector('#next');
  const filmList = document.querySelector('.films__list');

  if (nextPage.classList.contains('disabled')) {
    nextPage.classList.remove('disabled');
  }

  e.currentTarget.classList.remove('disabled');

  fetchApi.actualPage -= 1;

  if (fetchApi.actualPage === 1) {
    e.currentTarget.classList.add('disabled');
  }

  renderMarkup();

  currentPage.innerHTML = page;
  filmList.scrollIntoView({ behavior: 'smooth' });
}

export function onShowNextPage(e) {
  if (fetchApi.actualPage === fetchApi.totalPages) {
    if (!e.currentTarget.classList.contains('disabled')) {
      e.currentTarget.classList.add('disabled');
    }
    return;
  }

  const prevPage = document.querySelector('#prev');
  const currentPage = document.querySelector('#curr');
  const filmList = document.querySelector('.films__list');

  if (prevPage.classList.contains('disabled')) {
    prevPage.classList.remove('disabled');
  }

  fetchApi.actualPage += 1;
  // spinnerOnList.enabled({ timeDelay: 5, delayAfterStop: 200 });
  renderMarkup();

  currentPage.innerHTML = page;
  filmList.scrollIntoView({ behavior: 'smooth' });
}
