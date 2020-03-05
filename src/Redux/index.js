import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas';
import Repo from './RepoRedux';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  // const rootReducer = combineReducers({
  //   Repo,
  //   // repos: require('./RepoRedux').reducer,
  // });

  return configureStore(Repo, rootSaga);
};
