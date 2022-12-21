import { getFilmDataById, objData } from './postUserIntoDb';

export function checkDbCollectionForMatches(userId, reference) {
  const obj = getFilmDataById(userId, reference);

  // console.log(objData);
  // console.log('You already have this movie ');
}
