import Client from './ApisauceClient';

export const getRepos = user => {
  return Client.get(`/users/${user}/repos`, {});
};
