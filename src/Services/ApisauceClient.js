import apisauce from 'apisauce';

const baseURL = 'https://api.github.com';

const client = apisauce.create({
  baseURL,
  timeout: 15000,
});

export default client;
