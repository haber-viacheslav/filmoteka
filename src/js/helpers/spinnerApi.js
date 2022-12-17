import { Loading } from 'notiflix/build/notiflix-loading-aio';

class SpinneroOnLoadingApi {
  constructor({
    label = 'Loading',
    options = {
      backgroundColor: 'rgba(0,0,0,0.8)',
      svgColor: '#FF6B08',
    },
  }) {
    this.label = label;
    this.options = options;
    this.intervalId = null;
  }
  enabled({ timeDelay = 20, delayAfterStop = 400 }) {
    Loading.arrows(this.label, this.options);
    this.percentageLoading(timeDelay, delayAfterStop);
  }
  disabled(delayAfterStop) {
    Loading.change('Ready!');
    clearInterval(this.intervalId);
    Loading.remove(delayAfterStop);
  }
  percentageLoading(timeDelay, delayAfterStop) {
    let count = 0;
    const limit = 100;
    this.intervalId = setInterval(() => {
      Loading.change(`${this.label} ${(count += 1)}%`);

      if (count === limit) {
        Loading.change('Ready!');
        this.disabled(delayAfterStop);
      }
    }, timeDelay);
  }
}
export default SpinneroOnLoadingApi;
