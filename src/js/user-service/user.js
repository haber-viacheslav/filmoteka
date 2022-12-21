import '../helpers/changeTheme';
import '../helpers/btnScroll';
import './logOut';
import './lib';
import '../modals/modals';
import { refs } from '../helpers/refsApiServ';
import { onShowFilmModal } from '../modals/filmDetailsModal';
import SpinneroOnLoadingApi from '../helpers/spinnerApi';
refs.filmListUser.addEventListener('click', onShowFilmModal);
const libSpinner = new SpinneroOnLoadingApi({
  options: { backgroundColor: '#000000', svgColor: '#FF6B08' },
});
libSpinner.enabled({ timeDelay: 5, delayAfterStop: 350 });
