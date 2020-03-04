import { combineReducers } from 'redux';

export const GET_REPOS = 'my-awesome-app/repos/LOAD';
export const GET_REPOS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';

const initialState = {
  repos: [],
};

function reducerRepos(state = initialState, action) {
  console.log('REDUCER ' + action.type);
  console.log('STATE ' + state.repos);
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case GET_REPOS_FAIL:
      return { ...state, loading: false, error: 'Error getting repos info' };
    default:
      return state;
  }
}

export default reducerRepos;
// export default combineReducers({ reducerRepos });

export function listRepos(user) {
  console.log('LIST');
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`,
      },
    },
  };
}
