import { fetchApi } from '../main';
import { renderMarkup } from '../main/renderMainMarkup';
import { refs } from '../helpers/refsApiServ';

export function onCreatePagination(e) {
  const currentPage = refs.currentPage;
  const nextPage = refs.nextPage;
  const prevPage = refs.prevPage;

  // Numb page
  if (e.target.dataset.numbId) {
    fetchApi.actualPage = Number(e.target.dataset.numbId);
  }

  // Prev page

  if (e.target.dataset.id === 'prev') {
    if (fetchApi.actualPage === 1) {
      return;
    }

    fetchApi.actualPage -= 1;
  }

  // Next page
  if (e.target.dataset.id === 'next') {
    if (fetchApi.actualPage === fetchApi.totalPages) {
      return;
    }

    fetchApi.actualPage += 1;
  }

  // Toggle disable on next or prev page

  if (fetchApi.actualPage === fetchApi.totalPages) {
    nextPage.classList.add('disabled');
  } else if (nextPage.classList.contains('disabled')) {
    nextPage.classList.remove('disabled');
  }

  if (fetchApi.actualPage === 1) {
    prevPage.classList.add('disabled');
  } else {
    prevPage.classList.remove('disabled');
  }

  // Рендер сторінки
  renderMarkup();
  currentPage.innerHTML = fetchApi.actualPage;
}
