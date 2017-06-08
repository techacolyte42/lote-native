import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import recipes from './recipes';
import profile from './profile';
import lotes from './lotes';
import contacts from './contacts';
import myInt from './myInt';
import lotecation from './lotecation';
import userLocation from './user-location';
import activePage from './activePage';
import activeContact from './activeContact';
import activeMessage from './activeMessage';

const rootReducer = combineReducers({
  recipes,
  profile,
  lotes,
  contacts,
  myInt,
  lotecation,
  userLocation,
  activePage,
  activeContact,
  activeMessage,
//   routing: routerReducer
});

export default rootReducer;
