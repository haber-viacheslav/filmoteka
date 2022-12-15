import { fetchApi } from '../main';
import { renderMarkup } from '../main/renderMainMarkup';
import { refs } from '../helpers/refsApiServ';
import { spinnerOnList } from '../spinner/spinner';

function createPages(page) {
  let beforeContainer = ``;

  if (page > 1) {
    beforeContainer += `<div class="numb" id="first-page">1</div>`;
  }

  if (page > 5) {
    beforeContainer += `<div class="dots">...</div>`;
  } else if (page <= 5 && page > 1) {
    beforeContainer += `<div class="numb">2</div>`;
  }

  if ((page = 3)) {
    beforeContainer += `<div class="numb" id="first-page">2</div>`;
  } else if (page > 3) {
    beforeContainer += `<div class="numb" id="first-page">${page - 2}</div>`;
  }

  if (page > 4) {
    beforeContainer += `<div class="numb" id="first-page">${page - 1}</div>`;
  }

  refs.beforeCurPageContainer.innerHTML = beforeContainer;
}

export function onCreatePagination(e) {
  const currentPage = refs.currentPage;
  const nextPage = refs.nextPage;
  const prevPage = refs.prevPage;

  if (e.target.dataset.id === 'prev') {
    console.log('prev');

    if (fetchApi.actualPage === 1) {
      return;
    }

    if (nextPage.classList.contains('disabled')) {
      nextPage.classList.remove('disabled');
    }

    e.target.classList.remove('disabled');

    fetchApi.actualPage -= 1;

    if (fetchApi.actualPage === 1) {
      e.target.classList.add('disabled');
    }
  }

  if (e.target.dataset.id === 'next') {
    console.log('next');

    if (fetchApi.actualPage === fetchApi.totalPages) {
      if (!e.target.classList.contains('disabled')) {
        e.target.classList.add('disabled');
      }
      return;
    }

    if (prevPage.classList.contains('disabled')) {
      prevPage.classList.remove('disabled');
    }

    fetchApi.actualPage += 1;
  }

  // Рендер сторінки
  renderMarkup();
  currentPage.innerHTML = fetchApi.actualPage;
  console.log(fetchApi.actualPage);

  createPages(fetchApi.actualPage);
}

// function onShowPrevPage(e) {
//   if (fetchApi.actualPage === 1) {
//     return;
//   }

//   const currentPage = document.querySelector('#curr');
//   const nextPage = document.querySelector('#next');

//   if (nextPage.classList.contains('disabled')) {
//     nextPage.classList.remove('disabled');
//   }

//   e.currentTarget.classList.remove('disabled');

//   fetchApi.actualPage -= 1;

//   if (fetchApi.actualPage === 1) {
//     e.currentTarget.classList.add('disabled');
//   }

//   renderMarkup();

//   currentPage.innerHTML = fetchApi.actualPage;
// }

// function onShowNextPage(e) {
//   if (fetchApi.actualPage === fetchApi.totalPages) {
//     if (!e.currentTarget.classList.contains('disabled')) {
//       e.currentTarget.classList.add('disabled');
//     }
//     return;
//   }

//   const prevPage = document.querySelector('#prev');
//   const currentPage = document.querySelector('#curr');

//   if (prevPage.classList.contains('disabled')) {
//     prevPage.classList.remove('disabled');
//   }

//   fetchApi.actualPage += 1;
//   renderMarkup();

//   currentPage.innerHTML = fetchApi.actualPage;
// }

// spinnerOnList.enabled({ timeDelay: 5, delayAfterStop: 200 });
// filmList.scrollIntoView({ behavior: 'smooth' });

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
