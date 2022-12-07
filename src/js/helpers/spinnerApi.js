import { Loading } from 'notiflix/build/notiflix-loading-aio';

class SpinneroOnLoadingApi {
  constructor({
    label = 'Loading',
    options = {
      backgroundColor: '#000000',
      svgColor: '#FF6B08',
    },
  }) {
    this.time = 0;
    this.label = label;
    this.options = options;
    this.intervalId = null;
  }
  enabled(timeDelay) {
    Loading.arrows(this.label, this.options);
    this.percentageLoading(timeDelay);
  }
  disabled(timeDelay = 750) {
    clearInterval(this.intervalId);
    Loading.remove(timeDelay);
  }
  percentageLoading(timeDelay = 20) {
    let count = 0;
    const limit = 100;
    const breakPoint = 85;
    this.intervalId = setInterval(() => {
      Loading.change(`${this.label} ${(count += 1)}%`);

      if (count === limit) {
        Loading.change('Ready!');
        this.disabled();
      }
    }, timeDelay);
  }
}
export default SpinneroOnLoadingApi;
