import '../helpers/changeTheme';
import '../helpers/btnScroll';
import './logOut';
import './lib';
import '../modals/modals';
import { refs } from '../helpers/refsApiServ';
import { onShowFilmModal } from '../modals/filmDetailsModal';
refs.filmListUser.addEventListener('click', onShowFilmModal);
