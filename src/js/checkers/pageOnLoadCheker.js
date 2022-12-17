import { spinnerOnMain } from '../spinner/spinner';

export function checkLoadPageStatus({ delayAfterStop = 400 }) {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('ready');
    spinnerOnMain.disabled(delayAfterStop);
  });
  return;
}
