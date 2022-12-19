import { refs } from './refsApiServ';

refs.themeBtnRef.addEventListener('click', themeChange);

export function themeChange() {
  const isLight =
    refs.themeBtnRef.getAttribute('data-current') === 'true' || false;
    
  refs.themeBtnRef.setAttribute('data-current', !isLight);

  localStorage.setItem('light', JSON.stringify(isLight));

  
  

  let localTems = localStorage.getItem('light')    
  
  if (localTems === 'false') {
      document.body.classList.add('dark-theme');
      refs.lightIconRef.classList.remove('is-hidden'); 
    refs.darkIconRef.classList.add('is-hidden');
    
  } else {
      document.body.classList.remove('dark-theme');
      refs.darkIconRef.classList.remove('is-hidden');
    refs.lightIconRef.classList.add('is-hidden'); 
    
  }
}

let localTems = localStorage.getItem('light')
 if (localTems === 'false') {
      themeChange()
}