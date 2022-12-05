import { Pagination } from 'tui-pagination';
const container = document.querySelector('#tui-pagination-container');
const myPagination = new Pagination(container, {
  // Total number of items
  totalItems: 10,
  // Items per page
  itemsPerPage: 10,
  // Visible pages
  visiblePages: 10,
  // Current page
  page: 1,
  // center aligned
  centerAlign: false,
  // default classes
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  // enable usage statistics
  usageStatistics: true,
});
