import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const notifyFailureMessage = message => {
  return Notify.failure(`${message}`, {
    opacity: 0.8,
    position: 'center-right',
    timeout: 1500,

    backOverlayColor: 'rgba(50,198,130,0.2)',
  });
};

export const notifySuccessMessage = message => {
  return Notify.success(`${message}`, {
    opacity: 0.8,
    position: 'center-right',
    timeout: 1500,

    backOverlayColor: 'rgba(255,85,73,0.2)',
  });
};

export const notifyInfoMessage = message => {
  return Notify.info(`${message}`, {
    opacity: 1,
    position: 'center-right',
    timeout: 1500,
    background: '#0c09db',
  });
};
