import { all, takeLatest, takeEvery } from 'redux-saga/effects';
import API from '../Services/Api';

/* ------------- Types ------------- */
import { ReposTypes } from '../Redux/RepoRedux';

/* ------------- Sagas ------------- */
import { getRepos } from './RepoSagas';

/* ------------- API ------------- */
const api = API.create();

function* helloSaga() {
  console.log('Hello Sagas!');
}

function* watchIncrementAsync() {
  yield takeLatest(ReposTypes.GET_REPOS, getRepos, api);
}

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  // yield all([helloSaga(), watchIncrementAsync()]);
  // yield all([helloSaga(), watchIncrementAsync()]);
  yield all([helloSaga(), takeLatest(ReposTypes.GET_REPOS, getRepos, api)]);
}
