import apisauce from 'apisauce';

const create = (baseURL = 'https://api.github.com') => {
  const api = apisauce.create({
    baseURL,
    timeout: 15000,
  });

  const getRepos = user => {
    console.log('API - ' + `/users/${user}/repos`);
    return api.get(`/users/${user}/repos`, {});
  };

  return {
    getRepos,
  };
};

export default {
  create,
};
