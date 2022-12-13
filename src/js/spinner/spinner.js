import SpinneroOnLoadingApi from '../helpers/spinnerApi';

export const spinnerOnMain = new SpinneroOnLoadingApi({
  options: { backgroundColor: '#000000', svgColor: '#FF6B08' },
});
export const spinnerOnList = new SpinneroOnLoadingApi({});
