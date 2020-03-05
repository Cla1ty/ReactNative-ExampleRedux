import { combineReducers } from 'redux';
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// export const GET_REPOS = 'my-awesome-app/repos/LOAD';
// export const GET_REPOS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
// export const GET_REPOS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';
const { Types, Creators } = createActions({
  getRepos: ['payload'],
  getReposSuccess: ['payload'],
  getReposFail: ['error'],
});

export const ReposTypes = Types;
export const Action = Creators;

// const initialState = {
const INITIAL_STATE = Immutable({
  repos: [],
});

// function reducer(state = INITIAL_STATE, action) {
//   console.log('===== REDUCER =====');
//   console.log('STATE ' + action.type);
//   switch (action.type) {
//     case Types.GET_REPOS:
//       return { ...state, loading: true };
//     case Types.GET_REPOS_SUCCESS:
//       console.log(action.payload);
//       return { ...state, loading: false, repos: action.payload };
//     case Types.GET_REPOS_FAIL:
//       return { ...state, loading: false, error: 'Error getting repos info' };
//     default:
//       return state;
//   }
// }
export const getRepos = (state, action) => {
  return { ...state, loading: true };
  //state.merge({ loading: true });
};

export const getReposSuccess = (state, action) => {
  return { ...state, loading: false, repos: action.payload };
  //state.merge({ loading: false, repos: action.payload.data });
};

export const getReposFail = (state, action) => {
  return { ...state, loading: false, error: 'Error getting repos info' };
  //state.merge({ loading: false, error: 'Error getting repos info' });
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_REPOS]: getRepos,
  [Types.GET_REPOS_SUCCESS]: getReposSuccess,
  [Types.GET_REPOS_FAIL]: getReposFail,
});

export default reducer;
// export default combineReducers({ reducerRepos });

// export function listRepos(user) {
//   console.log('LIST');
//   return {
//     type: GET_REPOS,
//     payload: {
//       request: {
//         url: `/users/${user}/repos`,
//       },
//     },
//   };
// }
export function listRepos(user) {
  console.log('LIST ' + user);
  return Creators.getRepos({
    request: {
      url: `/users/${user}/repos`,
    },
  });
}
