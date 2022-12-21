import { spinnerOnMain } from '../spinner/spinner';

export function checkLoadPageStatus({ delayAfterStop = 400 }) {
  document.addEventListener('DOMContentLoaded', () => {
    spinnerOnMain.disabled(delayAfterStop);
  });
  return;
}
