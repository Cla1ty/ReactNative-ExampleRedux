import { combineReducers } from 'redux';
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// export const GET_REPOS = 'my-awesome-app/repos/LOAD';
// export const GET_REPOS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
// export const GET_REPOS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';
const { Types, Creators } = createActions({
  getRepos: ['payload'],
  getReposSuccess: ['respuesta'],
  getReposFail: ['error'],
});

// const initialState = {
const INITIAL_STATE = Immutable({
  repos: [],
});

// function reducerRepos(state = initialState, action) {
//   console.log('REDUCER ' + action.type);
//   console.log('STATE ' + state.repos);
//   console.log('STATE ' + Types.GET_REPOS);
//   switch (action.type) {
//     case Types.GET_REPOS:
//       return { ...state, loading: true };
//     case Types.GET_REPOS_SUCCESS:
//       return { ...state, loading: false, repos: action.payload.data };
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
  return { ...state, loading: false, repos: action.payload.data };
  //state.merge({ loading: false, repos: action.payload.data });
};

export const getReposFail = (state, action) => {
  return { ...state, loading: false, error: 'Error getting repos info' };
  //state.merge({ loading: false, error: 'Error getting repos info' });
};

const reducerRepos = createReducer(INITIAL_STATE, {
  [Types.GET_REPOS]: getRepos,
  [Types.GET_REPOS_SUCCESS]: getReposSuccess,
  [Types.GET_REPOS_FAIL]: getReposFail,
});

export default reducerRepos;
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
