import { call, put } from 'redux-saga/effects';
import { Action } from '../Redux/RepoRedux';

export function* getRepos(api, action) {
  try {
    const { payload } = action;
    console.log('REPO SAGAS - ' + payload);
    const response = yield call(api.getRepos, payload);
    if (response.ok) {
      yield put(Action.getReposSuccess(response.data));
    } else {
      yield put(Action.getReposFail('Connection problems :('));
    }
  } catch (error) {
    console.log('REPO SAGAS - ' + error);
    yield put(Action.getReposFail(error.message));
  }
}
