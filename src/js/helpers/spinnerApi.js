import { Loading } from 'notiflix/build/notiflix-loading-aio';

class SpinneroOnLoadingApi {
  constructor({
    label = 'Loading..',
    options = { backgroundColor: 'rgba(0, 0, 0, 0.56)' },
  }) {
    this.label = label;
    this.options = options;
    this.intervalId = null;
  }
  enabled(timeDelay) {
    Loading.arrows(this.label, this.options);
    this.percentageLoading(timeDelay);
  }
  disabled() {
    Loading.remove();
  }
  percentageLoading(time = 20) {
    let count = 0;
    const limit = 100;
    this.intervalId = setInterval(() => {
      if (count === limit) {
        Loading.change('Ready!');
        return this.disabled();
      }
      Loading.change(`Loading ${(count += 1)}%`);
    }, time);
  }
}
export default SpinneroOnLoadingApi;
