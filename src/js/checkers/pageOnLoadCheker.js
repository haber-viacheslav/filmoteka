import { spinnerOnMain } from '../spinner/spinner';

export function checkLoadPageStatus() {
  spinnerOnMain.enabled({ timeDelay: 20, delayAfterStop: 400 });
  document.addEventListener('DOMContentLoaded', () =>
    spinnerOnMain.disabled(400)
  );
  return;
}
