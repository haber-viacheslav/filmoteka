import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const notifyFailureMessage = message => {
  return Notify.failure(`${message}`, {
    opacity: 0.8,
    position: 'center-top',
    timeout: 300,
    cssAnimationDuration: 1500,
    backOverlayColor: 'rgba(50,198,130,0.2)',
    cssAnimationStyle: 'zoom',
  });
};

export const notifySuccessMessage = message => {
  return Notify.success(`${message}`, {
    opacity: 0.8,
    position: 'center-top',
    timeout: 500,
    cssAnimationDuration: 1500,
    backOverlayColor: 'rgba(255,85,73,0.2)',
    cssAnimationStyle: 'zoom',
  });
};

export const notifyInfoMessage = message => {
  return Notify.info(`${message}`, {
    opacity: 1,
    position: 'center-top',
    timeout: 500,
    background: '#0c09db',
    backOverlay: true,
    cssAnimationDuration: 1000,
    backOverlayColor: 'rgba(0, 153, 255, 0.313)',
    cssAnimationStyle: 'zoom',
  });
};
